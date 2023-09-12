import 'dotenv/config';

export const serverConfig = {
  port: process.env.PORT
};

export const dbConfig = {
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ?? '5432'
};

export const jwtConfig = {
  accessSecretKey: process.env.JWT_ACCESS_SECRET,
  refreshSecretKey: process.env.JWT_REFRESH_SECRET
};
