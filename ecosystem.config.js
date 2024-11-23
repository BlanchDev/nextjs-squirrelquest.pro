export const apps = [
  {
    name: "squirrelquest",
    script: "bun",
    args: "start",
    env: {
      NODE_ENV: "production",
      PORT: "3000",
    },
    autorestart: true,
    watch: false,
    max_memory_restart: "1G",
    exp_backoff_restart_delay: 100,
  },
];
