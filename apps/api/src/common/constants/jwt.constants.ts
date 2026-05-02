import { env } from 'process';

export const jwtConstans = {
  secret: env.SECRETJWT,
};
