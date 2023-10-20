'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserInfo.init({
    login: {
      type: DataTypes.TEXT
    },
    score: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'UserInfo',
  });
  return UserInfo;
};