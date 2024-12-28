export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.PRODUCTION_BASE_URL
    : process.env.DEVELOPMENT_BASE_URL;
