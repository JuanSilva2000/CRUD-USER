import db from "./db.js";
import "../models/user.js";

const sincronizacion = async () => {
    try {
        await db.sync();
        console.log("Sincronizacion exitosa");
    } catch (error) {
        console.error("Error en la sincronizacion: ", error);
    }
}

export default sincronizacion;