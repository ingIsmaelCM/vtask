import * as process from 'process';

export const authConfig: Record<string, any>={
  expiresIn: process.env.AUTH_EXPIRES_IN||'60s',
  jwtCookieName: process.env.AUTH_JWT_COOKIE_NAME||'accessToken',
  supabaseApiKey: process.env.AUTH_SUPABASE_API_KEY,
  supabaseProjectUrl: process.env.AUTH_SUPABASE_PROJECT_URL
}