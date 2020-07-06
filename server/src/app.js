const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config/config");
const Sequelize = require('sequelize')
const { sequelizedb1, sequelizedb2 } = require("./models/index");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

require("./routes")(app);
require('./controllers')

// (async () =>{
//  await sequelize
//   .sync()
//   .then(() => {
//     app.listen(config.port);
//     console.log(`server in port ${config.port}`);
//   })
//   .catch(function (err) {
//     console.log(err, ` Something went wrong with the Database Update! `);
//   });
// })();

sequelizedb1.sync().then(() => {
  //app.listen(config.port);
  //console.log(`server in port ${config.port}`);
});

sequelizedb2.sync().then(() => {
  app.listen(config.port);
  console.log(`server in port ${config.port}`);
});




