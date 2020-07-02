const Sequelize = require('sequelize');
const  db = require('../keys');
const connect = new Sequelize(db);


try{
  connect.authenticate();
  console.log('conexion establecida');
} catch (err){
  console.log('error en la conexion', err);
}

/////////cuando quiera crear una conexion a la BD uso db.connect

connect.Sequelize = Sequelize;

module.exports = connect;
