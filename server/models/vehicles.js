'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vehicles = sequelize.define('Vehicles', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    placa:{
      type:DataType.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    modelo:{
      type:DataType.STRING,
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
    eixos:{
      type:DataType.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    km_rodado:{
      type:DataType.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Vehicle.belongsTo(models.drivers);
        Vehicle.hasMany(models.tires);
      }
    }
  });
  return Vehicles;
};
