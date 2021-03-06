const server = {
  port: process.env.PORT || 4000,
  clusterEnabled: process.env.CLUSTER_ENABLED || true,
};

module.exports = {
  env: 'debug',
  log: {
    level: process.env.LOG_LEVEL || 'info',
  },
  server,
  mongodb: {
    url: process.env.MONGODB_URL || '',
  },
  jwt: {
    key: process.env.JWT_KEY || 'testJwt',
    expires: process.env.JWT_EXPIRES || '3650d',
  },
  sentry: {
    dsn: process.env.SENTRY_DSN || '',
  },
  redis: {
    host: process.env.REDIS_HOST || '',
    port: process.env.REDIS_PORT || 0,
    password: process.env.REDIS_PASSWORD || '',
  },
  rabbitmq: {
    url: process.env.RABBITMQ_URL || '',
    enable: process.env.RABBITMQ_ENABLE || false,
  },
  exporter: {
    enable: process.env.EXPORTER_ENABLE || false,
  },
  discord: {
    enable: process.env.DISCORD_ENABLE || false,
    url: process.env.DISCORD_WEB_HOOK_URL || '',
  },
};
