import path from 'node:path';
import { defineConfig } from 'prisma/config';

// DATABASE_URL is read from .env automatically by Prisma CLI commands.
// No need to pass it here — and `migrate` was removed from PrismaConfig in Prisma 7.
export default defineConfig({
  schema: path.join(__dirname, 'prisma', 'schema.prisma'),
});
