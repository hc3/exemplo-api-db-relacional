'use strict';
module.exports = function(sequelize, DataTypes) {
  var Drivers = sequelize.define('Drivers', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name: {
      type:DataTypes.STRING
      allowNull:false,
      validate: {
        notEmpty:true
      }
    },
    cod: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notEmpty:true
      }
    },
    phone:{
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty:true
      }
    },
  }, {
    classMethods: {
      associate: function(models) {
        Drivers.hasOne(models.Vehicle);
      }
    }
  });
  return Drivers;
};
