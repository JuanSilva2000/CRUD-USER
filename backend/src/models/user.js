import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const user = db.define("users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    edad: {
      type: DataTypes.INTEGER,
    },
  });

export default user;