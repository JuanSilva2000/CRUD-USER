import sequelize  from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
);

const connection = async () => {
    try {
        await db.authenticate();
        console.log("Conexion a la base de datos exitosa");
    } catch (error) {
        console.error("No se puedo conectar a la base de datos: ", error);
    }
}

connection();

export default db;