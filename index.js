import sequelize from "./app/config/db.config.js";
import app from "./server.js";

import "./app/models/asociaciones.js";

const main = async () => {
    await sequelize.authenticate();
    await sequelize.sync({ force: false, alter: true });
    console.log("Se estableció la conexión a la BD.")
    app.listen(3000, () => {
        console.log("Servidor escuchando en puerto 3000.");
    })
}

main();