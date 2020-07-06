const { User } = require('../models');
const { count, rows } = User.findAndCountAll({
  where: { fullname: "jose" }
});