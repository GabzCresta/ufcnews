// pm2 ecosystem — crenas web + real-time
// Usage:
//   pm2 start ecosystem.config.cjs
//   pm2 reload ecosystem.config.cjs --update-env
//
// To scale crenas-rt to cluster (for >1500 concurrent sockets on this VPS):
//   1. npm i @socket.io/cluster-adapter @socket.io/sticky
//   2. set instances: 'max' below AND wrap io with createAdapter() in server/rt/index.ts
//   3. nginx must hash $remote_addr consistent (sticky) — config already compatible
module.exports = {
  apps: [
    {
      name: 'crenas',
      cwd: __dirname,
      script: 'node_modules/.bin/next',
      args: 'start -p 3010',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '1500M',
      env: { NODE_ENV: 'production' },
    },
    // crenas-rt base instance (port 3011) — always runs the PG LISTEN
    {
      name: 'crenas-rt',
      cwd: __dirname,
      script: 'server/rt/index.ts',
      interpreter: './node_modules/.bin/tsx',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '600M',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
        RT_PORT: '3011',
        RT_LISTEN_PORT: '3011',
        CLUSTER_MODE: process.env.CLUSTER_MODE ?? 'false',
      },
    },
    // crenas-rt-2 cluster sidecar (port 3012) — only runs if CLUSTER_MODE=true.
    // Uses @socket.io/postgres-adapter for fan-out; nginx upstream sticky-hashes
    // clients so a given IP always lands on the same instance (auth stability).
    // Does NOT run the PG LISTEN (only base instance does, to avoid dup).
    {
      name: 'crenas-rt-2',
      cwd: __dirname,
      script: 'server/rt/index.ts',
      interpreter: './node_modules/.bin/tsx',
      instances: 1,
      exec_mode: 'fork',
      autorestart: process.env.CLUSTER_MODE === 'true',
      max_memory_restart: '600M',
      // Start disabled — pm2 will not auto-start when CLUSTER_MODE is false.
      // When enabled, reload brings it up alongside the base instance.
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
        RT_PORT: '3012',
        RT_LISTEN_PORT: '3011',
        CLUSTER_MODE: process.env.CLUSTER_MODE ?? 'false',
      },
    },
  ],
};
