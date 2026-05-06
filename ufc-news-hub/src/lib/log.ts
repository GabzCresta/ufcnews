/**
 * Shared logger — use this instead of console in backend code.
 *
 * Behavior:
 *   - prod: JSON to stdout (captured by pm2 logs → structured ingestion if needed)
 *   - dev:  pretty-printed (requires pino-pretty; optional)
 *
 * Usage:
 *   import { log } from '@/lib/log';
 *   log.info({ userId }, 'user logged in');
 *   log.warn({ err }, 'retrying');
 *   log.error({ err, route: '/api/x' }, 'failed');
 */
import pino from 'pino';

const level = process.env.LOG_LEVEL ?? (process.env.NODE_ENV === 'production' ? 'info' : 'debug');

export const log = pino({
  level,
  base: { svc: 'crenas-web' },
  transport: process.env.NODE_ENV !== 'production'
    ? { target: 'pino-pretty', options: { colorize: true, translateTime: 'SYS:HH:MM:ss' } }
    : undefined,
});

export function logError(context: string, err: unknown, extra?: Record<string, unknown>) {
  const data: Record<string, unknown> = { ctx: context, ...extra };
  if (err instanceof Error) {
    data.err = { message: err.message, stack: err.stack, name: err.name };
  } else {
    data.err = err;
  }
  log.error(data);
}
