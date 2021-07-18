

module.exports = {
  type: process.env.DB_TYPE,
  url: process.env.DATABASE_URL,
  autoLoadEntities: true,
  synchronize: true,
  logging: true,
  entities: [
    'dist/apps/backend/api/src/migrations/*.entity.js', // where to find files entities when the script backend:api:entities is run
  ],
  migrations: [
    'dist/apps/backend/api/src/migrations/*.js', // where to find files migrations when the script backend:api:migrations:run is run
  ],
  cli: {
    'migrationsDir': 'apps/backend/api/src/migrations', // where to put files when the script backend:api:migration:create is run
  },
}
