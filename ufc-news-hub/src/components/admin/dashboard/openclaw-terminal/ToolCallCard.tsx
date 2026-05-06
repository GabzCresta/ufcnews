'use client';

import { useState } from 'react';
import {
  FileText, Terminal, Globe, Search, FolderSearch, Wrench,
  Loader2, CheckCircle2, AlertTriangle, ChevronDown, ChevronRight,
  Pencil,
} from 'lucide-react';
import type { ToolCallInfo } from './types';

const TOOL_ICONS: Record<string, typeof FileText> = {
  read: FileText,
  Read: FileText,
  write: Pencil,
  Write: Pencil,
  edit: Pencil,
  Edit: Pencil,
  bash: Terminal,
  Bash: Terminal,
  exec: Terminal,
  grep: Search,
  Grep: Search,
  glob: FolderSearch,
  Glob: FolderSearch,
  web_fetch: Globe,
  WebFetch: Globe,
  web_search: Globe,
  WebSearch: Globe,
  browser: Globe,
};

function formatArgs(args: Record<string, unknown> | null | undefined): string {
  if (!args || typeof args !== 'object') return '';
  return Object.entries(args)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => {
      const val = typeof v === 'string'
        ? (v.length > 80 ? v.substring(0, 80) + '...' : v)
        : JSON.stringify(v);
      return `${k}=${val}`;
    })
    .join(' ');
}

function formatDuration(start: number | undefined, end?: number): string {
  if (!Number.isFinite(start)) return '...';
  const ms = (end || Date.now()) - (start as number);
  if (!Number.isFinite(ms) || ms < 0) return '...';
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
}

export function ToolCallCard({ tool }: { tool: ToolCallInfo }) {
  const [expanded, setExpanded] = useState(tool.phase === 'running');
  const Icon = TOOL_ICONS[tool.name] || Wrench;

  const borderColor = tool.phase === 'running'
    ? 'border-l-ufc-red'
    : tool.phase === 'done'
      ? 'border-l-emerald-500/50'
      : 'border-l-red-500/50';

  return (
    <div
      className={`neu-inset border-l-4 ${borderColor} rounded-lg my-2 transition-all duration-200`}
      onClick={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') setExpanded(!expanded); }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 cursor-pointer select-none">
        {expanded
          ? <ChevronDown className="w-3 h-3 text-gray-500 shrink-0" />
          : <ChevronRight className="w-3 h-3 text-gray-500 shrink-0" />
        }
        <Icon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
        <span className="text-xs font-mono text-gray-300 truncate">{tool.name}</span>

        {/* Brief args preview when collapsed */}
        {!expanded && (
          <span className="text-[10px] text-gray-600 truncate flex-1">
            {formatArgs(tool.args).substring(0, 60)}
          </span>
        )}

        <span className="ml-auto flex items-center gap-1.5 shrink-0">
          <span className="text-[10px] text-gray-600">
            {formatDuration(tool.startTime, tool.endTime)}
          </span>
          {tool.phase === 'running' && <Loader2 className="w-3 h-3 text-ufc-red animate-spin" />}
          {tool.phase === 'done' && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
          {tool.phase === 'error' && <AlertTriangle className="w-3 h-3 text-red-400" />}
        </span>
      </div>

      {/* Expanded detail */}
      {expanded && (
        <div className="px-3 pb-2 space-y-1.5 border-t border-[#1e1e2e]">
          {/* Args */}
          {tool.args && Object.keys(tool.args).length > 0 && (
            <div className="pt-1.5">
              <span className="text-[10px] text-gray-600 uppercase">Args</span>
              <pre className="text-[11px] text-gray-400 font-mono mt-0.5 whitespace-pre-wrap break-all max-h-20 overflow-y-auto">
                {JSON.stringify(tool.args, null, 2)}
              </pre>
            </div>
          )}

          {/* Meta/Result */}
          {tool.meta && (
            <div>
              <span className="text-[10px] text-gray-600 uppercase">Resultado</span>
              <p className="text-[11px] text-gray-400 mt-0.5 max-h-28 overflow-y-auto whitespace-pre-wrap break-all">
                {tool.meta.length > 500 ? tool.meta.substring(0, 500) + '...' : tool.meta}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
