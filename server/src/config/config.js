module.exports = {
  port: process.env.PORT || 8081,
  db: {
    db1: {
      username: process.env.DB_user || "root",
      password: process.env.DB_PASS || "guada",
      database: process.env.DB_name || "consultas",
      logging: false,
      options: {
        host: process.env.HOST || "localhost",
        dialect: process.env.DIALECT || "mysql",
      },
    },
    db2: {
      username: process.env.DB_user || "root",
      password: process.env.DB_PASS || "guada",
      database: process.env.DB_name || "servicios",
      logging: false,
      options: {
        host: process.env.HOST || "localhost",
        dialect: process.env.DIALECT || "mysql",
      },
    },
  },
};
