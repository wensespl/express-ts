import type { CorsOptions } from 'cors';

const allowedOrigins: Array<string | undefined> = [
  'http://localhost:8080',
  'https://myapp.co'
];

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
};
