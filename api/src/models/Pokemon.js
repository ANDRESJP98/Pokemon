const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isUrl:true
      }
    },
    life: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:5
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:5
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:5
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:5
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:1
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:1
    },
    created:{
      type:DataTypes.BOOLEAN,
      defaultValue:true, 
      allowNull:true
    }
  }, {timestamps: false});
};
