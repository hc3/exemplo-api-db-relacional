'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tires = sequelize.define('Tires', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    cod:{
      type:DataType.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    marca:{
      type:DataType.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    vida: {
      type:DataType.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    sulco: {
      type:DataType.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    recap: {
      type:DataType.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Tires.belongsTo(models.vehicle);
      }
    }
  });
  return Tires;
};
