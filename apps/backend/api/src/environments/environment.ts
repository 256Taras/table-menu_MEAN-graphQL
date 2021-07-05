export const environment = {
  production: false,
  connection: (configService)=>({
    type: 'postgres'as 'aurora-data-api',
    url: configService.get('DATABASE_URL'),
    autoLoadEntities: true,
    synchronize: true,
    logging: false,
    dropSchema: false,
  }),
};
