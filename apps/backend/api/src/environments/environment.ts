export const environment = {
  production: false,
  connection: {
    type: process.env.DB_TYPE as 'aurora-data-api',
    url: process.env.DATABASE_URL,
    autoLoadEntities: true,
    synchronize: true,
    logging: false,
    dropSchema: false,
  },
  jwt: {
    secrete: process.env.JWT_SECRET,
    expiresIn: Number(process.env.JWT_EXPIRES_IN),
  },
};
