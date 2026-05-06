import { spawn, type ChildProcess } from 'child_process';
import { EventEmitter } from 'events';

// ═══════════════════════════════════════════════════════════
// Claude CLI — Foundation module for spawning claude processes
//
// Single point of coupling with the Claude Code CLI binary.
// Used by pipeline-runner.ts (unattended) and chat API (interactive).
//
// Protocol: claude -p --output-format stream-json --verbose
// Each stdout line is a JSON object (NDJSON).
// ═══════════════════════════════════════════════════════════

const CLAUDE_BIN = '/root/.local/bin/claude';
const PROJECT_CWD = '/root/ufc-news-hub/ufc-news-hub';

// ── Types ──

export interface ClaudeSpawnOptions {
  prompt: string;
  agent?: string;
  cwd?: string;
  sessionId?: string;
  resumeSessionId?: string;
  maxTurns?: number;
  model?: string;
  appendSystemPrompt?: string;
  allowedTools?: string[];
  permissionMode?: string;
  abortSignal?: AbortSignal;
  includePartialMessages?: boolean;
}

export type ClaudeStreamEvent =
  | { type: 'init'; sessionId: string; tools: string[]; model: string }
  | { type: 'text_delta'; text: string }
  | { type: 'tool_start'; id: string; name: string }
  | { type: 'tool_input_delta'; id: string; partialJson: string }
  | { type: 'tool_result'; toolUseId: string; content: string; isError: boolean }
  | { type: 'assistant_message'; content: ContentBlock[] }
  | { type: 'rate_limit'; utilization: number; status: string }
  | { type: 'result'; text: string; isError: boolean; sessionId: string; durationMs: number; numTurns: number; usage: Record<string, unknown> }
  | { type: 'error'; message: string };

export interface ContentBlock {
  type: string;
  text?: string;
  name?: string;
  input?: Record<string, unknown>;
  id?: string;
  tool_use_id?: string;
  content?: string | Array<{ type: string; text: string }>;
}

export interface ClaudeHandle {
  events: AsyncIterable<ClaudeStreamEvent>;
  process: ChildProcess;
  kill: () => void;
}

// ── Build CLI arguments ──

function buildArgs(options: ClaudeSpawnOptions): string[] {
  const args: string[] = [
    '-p', options.prompt,
    '--output-format', 'stream-json',
    '--verbose',
    '--permission-mode', options.permissionMode || 'auto',
  ];

  if (options.includePartialMessages !== false) {
    args.push('--include-partial-messages');
  }

  if (options.agent) {
    args.push('--agent', options.agent);
  }

  if (options.model) {
    args.push('--model', options.model);
  }

  if (options.maxTurns !== undefined) {
    args.push('--max-turns', String(options.maxTurns));
  }

  if (options.appendSystemPrompt) {
    args.push('--append-system-prompt', options.appendSystemPrompt);
  }

  if (options.allowedTools && options.allowedTools.length > 0) {
    args.push('--allowedTools', options.allowedTools.join(','));
  }

  if (options.resumeSessionId) {
    args.push('--resume', options.resumeSessionId);
  } else if (options.sessionId) {
    args.push('--session-id', options.sessionId);
  }

  return args;
}

// ── Parse a single NDJSON line into typed events ──

function parseLine(raw: string): ClaudeStreamEvent | null {
  if (!raw.trim()) return null;

  let data: Record<string, unknown>;
  try {
    data = JSON.parse(raw);
  } catch {
    return null;
  }

  const type = data.type as string;

  // system init
  if (type === 'system' && data.subtype === 'init') {
    return {
      type: 'init',
      sessionId: data.session_id as string,
      tools: (data.tools as string[]) || [],
      model: data.model as string,
    };
  }

  // stream_event — granular streaming with --include-partial-messages
  if (type === 'stream_event') {
    const event = data.event as Record<string, unknown>;
    if (!event) return null;
    const eventType = event.type as string;

    // Text delta
    if (eventType === 'content_block_delta') {
      const delta = event.delta as Record<string, unknown>;
      if (!delta) return null;

      if (delta.type === 'text_delta' && typeof delta.text === 'string') {
        return { type: 'text_delta', text: delta.text };
      }

      if (delta.type === 'input_json_delta' && typeof delta.partial_json === 'string') {
        // Need the index to correlate with tool_start — use content_block index
        return {
          type: 'tool_input_delta',
          id: String(event.index ?? ''),
          partialJson: delta.partial_json,
        };
      }
    }

    // Tool use block started
    if (eventType === 'content_block_start') {
      const block = event.content_block as Record<string, unknown>;
      if (block?.type === 'tool_use') {
        return {
          type: 'tool_start',
          id: (block.id as string) || String(event.index ?? ''),
          name: (block.name as string) || 'unknown',
        };
      }
    }

    // We don't need to emit content_block_stop, message_start, message_stop, message_delta, thinking
    return null;
  }

  // Consolidated assistant message (full content after each turn)
  if (type === 'assistant') {
    const message = data.message as Record<string, unknown>;
    if (!message) return null;
    const content = message.content as ContentBlock[];
    if (!Array.isArray(content)) return null;

    // Check for tool_result blocks (these come as 'user' type actually)
    return { type: 'assistant_message', content };
  }

  // User message with tool results (auto-generated by CLI)
  if (type === 'user') {
    const message = data.message as Record<string, unknown>;
    if (!message) return null;
    const content = message.content as Array<Record<string, unknown>>;
    if (!Array.isArray(content)) return null;

    for (const block of content) {
      if (block.type === 'tool_result') {
        const resultContent = block.content;
        let text = '';
        if (typeof resultContent === 'string') {
          text = resultContent;
        } else if (Array.isArray(resultContent)) {
          text = (resultContent as Array<{ text?: string }>)
            .map(c => c.text || '')
            .join('\n');
        }
        return {
          type: 'tool_result',
          toolUseId: (block.tool_use_id as string) || '',
          content: text.substring(0, 500),
          isError: Boolean(block.is_error),
        };
      }
    }
    return null;
  }

  // Rate limit event
  if (type === 'rate_limit_event') {
    const info = data.rate_limit_info as Record<string, unknown>;
    return {
      type: 'rate_limit',
      utilization: (info?.utilization as number) || 0,
      status: (info?.status as string) || 'unknown',
    };
  }

  // Final result
  if (type === 'result') {
    return {
      type: 'result',
      text: (data.result as string) || '',
      isError: Boolean(data.is_error),
      sessionId: (data.session_id as string) || '',
      durationMs: (data.duration_ms as number) || 0,
      numTurns: (data.num_turns as number) || 0,
      usage: (data.usage as Record<string, unknown>) || {},
    };
  }

  return null;
}

// ── Spawn claude and return async iterable of events ──

export function spawnClaude(options: ClaudeSpawnOptions): ClaudeHandle {
  const args = buildArgs(options);
  const cwd = options.cwd || PROJECT_CWD;

  const proc = spawn(CLAUDE_BIN, args, {
    cwd,
    stdio: ['pipe', 'pipe', 'pipe'],
    env: { ...process.env, FORCE_COLOR: '0' },
  });

  // Handle abort signal
  if (options.abortSignal) {
    const onAbort = () => {
      if (!proc.killed) proc.kill('SIGTERM');
    };
    options.abortSignal.addEventListener('abort', onAbort, { once: true });
    proc.on('exit', () => options.abortSignal?.removeEventListener('abort', onAbort));
  }

  const emitter = new EventEmitter();
  emitter.setMaxListeners(5);

  let stdoutBuffer = '';
  let stderrBuffer = '';
  let finished = false;

  proc.stdout?.on('data', (chunk: Buffer) => {
    stdoutBuffer += chunk.toString();
    const lines = stdoutBuffer.split('\n');
    stdoutBuffer = lines.pop() || '';

    for (const line of lines) {
      const event = parseLine(line);
      if (event) emitter.emit('event', event);
    }
  });

  proc.stderr?.on('data', (chunk: Buffer) => {
    stderrBuffer += chunk.toString();
  });

  proc.on('exit', (code) => {
    // Flush remaining buffer
    if (stdoutBuffer.trim()) {
      const event = parseLine(stdoutBuffer);
      if (event) emitter.emit('event', event);
    }

    // If we got stderr and no result event, emit error
    if (stderrBuffer.trim() && !finished) {
      emitter.emit('event', {
        type: 'error',
        message: stderrBuffer.trim().substring(0, 500),
      });
    }

    if (code !== 0 && code !== null && !finished) {
      emitter.emit('event', {
        type: 'error',
        message: `Claude process exited with code ${code}`,
      });
    }

    finished = true;
    emitter.emit('done');
  });

  proc.on('error', (err) => {
    emitter.emit('event', {
      type: 'error',
      message: `Spawn error: ${err.message}`,
    });
    finished = true;
    emitter.emit('done');
  });

  // Async iterable wrapper
  const events: AsyncIterable<ClaudeStreamEvent> = {
    [Symbol.asyncIterator]() {
      const queue: ClaudeStreamEvent[] = [];
      let resolve: ((value: IteratorResult<ClaudeStreamEvent>) => void) | null = null;
      let done = false;

      const onEvent = (evt: ClaudeStreamEvent) => {
        if (evt.type === 'result') finished = true;
        if (resolve) {
          const r = resolve;
          resolve = null;
          r({ value: evt, done: false });
        } else {
          queue.push(evt);
        }
      };

      const onDone = () => {
        done = true;
        emitter.off('event', onEvent);
        emitter.off('done', onDone);
        if (resolve) {
          const r = resolve;
          resolve = null;
          r({ value: undefined as unknown as ClaudeStreamEvent, done: true });
        }
      };

      emitter.on('event', onEvent);
      emitter.on('done', onDone);

      return {
        next(): Promise<IteratorResult<ClaudeStreamEvent>> {
          if (queue.length > 0) {
            return Promise.resolve({ value: queue.shift()!, done: false });
          }
          if (done) {
            return Promise.resolve({ value: undefined as unknown as ClaudeStreamEvent, done: true });
          }
          return new Promise((r) => { resolve = r; });
        },

        return(): Promise<IteratorResult<ClaudeStreamEvent>> {
          done = true;
          emitter.off('event', onEvent);
          emitter.off('done', onDone);
          if (!proc.killed) proc.kill('SIGTERM');
          return Promise.resolve({ value: undefined as unknown as ClaudeStreamEvent, done: true });
        },
      };
    },
  };

  return {
    events,
    process: proc,
    kill: () => { if (!proc.killed) proc.kill('SIGTERM'); },
  };
}
