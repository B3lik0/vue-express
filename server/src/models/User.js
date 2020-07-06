module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    fullname: {
      type: DataTypes.STRING,
      notEmpty: true,
    },
    username: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_login: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "active",
    },
  });
  return User;
};
