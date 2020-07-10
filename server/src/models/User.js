module.exports = (sequelize, DataTypes) => 
  sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    password: {
      type: DataTypes.STRING,
      notEmpty: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    }
  });
