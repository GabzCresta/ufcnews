'use client';

import type { JSX } from 'react';

// ═══════════════════════════════════════════════════════════
// Markdown Renderer — Shared between MessageBubble & OrchestratorView
//
// Renders: headers, tables, code blocks, blockquotes,
// ordered/unordered lists, bold, italic, inline code.
// Styled for neumorphism dark-mode terminal.
// No external dependencies.
// ═══════════════════════════════════════════════════════════

// ── Block types ──

interface Block {
  type: 'heading' | 'code' | 'table' | 'blockquote' | 'list' | 'paragraph' | 'hr';
  content: string;
  level?: number;
  lang?: string;
  rows?: string[][];
  ordered?: boolean;
  items?: string[];
}

// ── Block-level parsing ──

function parseBlocks(text: string): Block[] {
  const blocks: Block[] = [];
  const lines = text.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Horizontal rule (--- or ***)
    if (line.match(/^[\s]*[-*]{3,}[\s]*$/) && !line.match(/^\s*[-*]\s+/)) {
      blocks.push({ type: 'hr', content: '' });
      i++;
      continue;
    }

    // Code block (```)
    if (line.trimStart().startsWith('```')) {
      const lang = line.trimStart().slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trimStart().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      blocks.push({ type: 'code', content: codeLines.join('\n'), lang });
      i++;
      continue;
    }

    // Heading (# ## ### ####)
    const headingMatch = line.match(/^(#{1,4})\s+(.+)/);
    if (headingMatch) {
      blocks.push({ type: 'heading', content: headingMatch[2], level: headingMatch[1].length });
      i++;
      continue;
    }

    // Table (| ... | ... |)
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      const rows = tableLines
        .filter(l => !l.match(/^\|[\s-:|]+\|$/))
        .map(l => l.split('|').slice(1, -1).map(cell => cell.trim()));
      if (rows.length > 0) {
        blocks.push({ type: 'table', content: '', rows });
      }
      continue;
    }

    // Blockquote (> ...)
    if (line.trimStart().startsWith('> ')) {
      const quoteLines: string[] = [];
      while (i < lines.length && (lines[i].trimStart().startsWith('> ') || lines[i].trimStart() === '>')) {
        quoteLines.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }
      blocks.push({ type: 'blockquote', content: quoteLines.join('\n') });
      continue;
    }

    // Unordered list (- or * )
    if (line.match(/^\s*[-*]\s+/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\s*[-*]\s+/)) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, ''));
        i++;
      }
      blocks.push({ type: 'list', content: '', items, ordered: false });
      continue;
    }

    // Ordered list (1. 2. etc)
    if (line.match(/^\s*\d+\.\s+/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\s*\d+\.\s+/)) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, ''));
        i++;
      }
      blocks.push({ type: 'list', content: '', items, ordered: true });
      continue;
    }

    // Empty line
    if (!line.trim()) {
      i++;
      continue;
    }

    // Paragraph
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].match(/^#{1,4}\s/) &&
      !lines[i].trimStart().startsWith('```') &&
      !(lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) &&
      !lines[i].trimStart().startsWith('> ') &&
      !lines[i].match(/^\s*[-*]\s+/) &&
      !lines[i].match(/^\s*\d+\.\s+/) &&
      !lines[i].match(/^[\s]*[-*]{3,}[\s]*$/)
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push({ type: 'paragraph', content: paraLines.join('\n') });
    }
  }

  return blocks;
}

// ── Inline rendering: **bold**, *italic*, `code` ──

function renderInline(text: string): (string | JSX.Element)[] {
  const parts: (string | JSX.Element)[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(<strong key={match.index} className="text-white font-semibold">{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('*') && token.endsWith('*') && !token.startsWith('**')) {
      parts.push(<em key={match.index} className="text-gray-200 italic">{token.slice(1, -1)}</em>);
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <code key={match.index} className="bg-[#1a1a2e] text-ufc-red px-1.5 py-0.5 rounded text-[11px] font-mono">
          {token.slice(1, -1)}
        </code>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : [text];
}

// ── Render a single block ──

function renderBlock(block: Block, index: number): JSX.Element {
  switch (block.type) {
    case 'hr':
      return <hr key={index} className="border-[#2a2a3a] my-2" />;

    case 'heading': {
      const cls = block.level === 1
        ? 'text-lg font-display uppercase text-ufc-red tracking-wide'
        : block.level === 2
          ? 'text-base font-display uppercase text-white tracking-wide'
          : block.level === 3
            ? 'text-sm font-semibold text-gray-200'
            : 'text-xs font-semibold text-gray-300 uppercase tracking-wider';
      return <div key={index} className={cls}>{renderInline(block.content)}</div>;
    }

    case 'code':
      return (
        <div key={index} className="neu-inset rounded-lg overflow-hidden">
          {block.lang && (
            <div className="px-3 py-1 border-b border-[#1e1e2e]">
              <span className="text-[10px] text-gray-600 uppercase font-mono">{block.lang}</span>
            </div>
          )}
          <pre className="px-3 py-2 text-[11px] text-emerald-400 font-mono whitespace-pre-wrap break-all overflow-x-auto max-h-60 overflow-y-auto">
            {block.content}
          </pre>
        </div>
      );

    case 'table':
      if (!block.rows || block.rows.length === 0) return <span key={index} />;
      return (
        <div key={index} className="neu-inset rounded-lg overflow-hidden overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[#2a2a3a]">
                {block.rows[0].map((cell, j) => (
                  <th key={j} className="px-3 py-2 text-left text-[10px] text-gray-500 uppercase font-semibold tracking-wider">
                    {renderInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.slice(1).map((row, ri) => (
                <tr key={ri} className="border-b border-[#1a1a24] last:border-0">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-1.5 text-gray-300">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'blockquote':
      return (
        <div key={index} className="border-l-2 border-ufc-red/40 pl-3 py-1">
          <div className="text-sm text-gray-400 italic">{renderInline(block.content)}</div>
        </div>
      );

    case 'list':
      if (!block.items) return <span key={index} />;
      if (block.ordered) {
        return (
          <ol key={index} className="space-y-1 pl-1">
            {block.items.map((item, j) => (
              <li key={j} className="flex gap-2 text-sm text-gray-300">
                <span className="text-ufc-red font-semibold shrink-0">{j + 1}.</span>
                <span>{renderInline(item)}</span>
              </li>
            ))}
          </ol>
        );
      }
      return (
        <ul key={index} className="space-y-1 pl-1">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-2 text-sm text-gray-300">
              <span className="text-ufc-red mt-0.5 shrink-0">-</span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );

    case 'paragraph':
      return (
        <p key={index} className="text-sm text-gray-300 leading-relaxed">
          {block.content.split('\n').map((line, j) => (
            <span key={j}>
              {j > 0 && <br />}
              {renderInline(line)}
            </span>
          ))}
        </p>
      );

    default:
      return <p key={index} className="text-sm text-gray-300">{block.content}</p>;
  }
}

// ── Public component ──

export function MarkdownContent({ text }: { text: string }) {
  if (!text) return null;
  const blocks = parseBlocks(text);
  return (
    <div className="space-y-2">
      {blocks.map((block, i) => renderBlock(block, i))}
    </div>
  );
}
