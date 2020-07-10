const AuthController = require("../controllers/AuthController");
const AuthControllerPolicy = require('../policies/AuthControllerPolicy.js')
module.exports = (app) => {
  app.post('/register', 
  AuthControllerPolicy.register,
  AuthController.register);
};