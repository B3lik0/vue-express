const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
//var env = process.env.NODE_ENV || "development";
const config = require("../config/config");
const db = {};

var sequelizedb1 = new Sequelize(
  config.db.db1.database,
  config.db.db1.username,
  config.db.db1.password,
  config.db.db1.options
);

fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js")
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelizedb1, Sequelize);
    db[model.name] = model;
  });

  // var sequelizedb2 = new Sequelize(
  //   config.db.db2.database,
  //   config.db.db2.username,
  //   config.db.db2.password,
  //   config.db.db2.options
  // );
  
  // fs.readdirSync(__dirname)
  //   .filter((file) => file !== "index.js")
  //   .forEach((file) => {
  //     const model = require(path.join(__dirname, file))(sequelizedb2, Sequelize);
  //     db[model.name] = model;
  //   });
  

db.sequelizedb1 = sequelizedb1;
//db.sequelizedb2 = sequelizedb2;
db.Sequelize = Sequelize;

module.exports = db;
