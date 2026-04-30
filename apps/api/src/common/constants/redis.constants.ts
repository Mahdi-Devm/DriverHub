import { config } from 'dotenv';

config();
export const REDIS_PROVIDER = String(process.env.REDIS_KEY);
