const { User } = require("../models");

module.exports = {
  async register(req, res) {
    try{
      const User = await User.create(req.body)
    }catch(err){
      res.status(400).send({
        error: `this error is ${err}`
      })
    }
  },
};
