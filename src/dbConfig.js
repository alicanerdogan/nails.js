module.exports = {
  client: "pg",
  version: "12",
  connection: {
    host: "127.0.0.1",
    port: 5400,
    user: "postgres",
    password: "postgres",
    database: "nails-db"
  },
  migrations: {
    tableName: "knex_migrations",
    extension: "ts"
  },
  pool: { min: 3, max: 7 }
};
