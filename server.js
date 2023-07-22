import express from "express";
import cors from "cors";
import morgan from "morgan";

//importación de controladores
import usersController from "./app/controllers/user.controller.js";
import * as bootcampsController from "./app/controllers/bootcamp.controller.js";

const app = express();

//middlewares generales de la app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));


//RUTAS DE USERS

app.post("/api/users", usersController.createUser);
app.get("/api/users/:id", usersController.findUserById);
app.get("/api/users", usersController.findAll);
app.put("/api/users/:id", usersController.updateUserById);
app.delete("/api/users/:id", usersController.deleteUserById);


//RUTAS DE BOOTCAMPS

app.post("/api/bootcamps", bootcampsController.createBootcamp);
app.post("/api/bootcamps/adduser", bootcampsController.addUser);
app.get("/api/bootcamps/:id", bootcampsController.findById);
app.get("/api/bootcamps", bootcampsController.findAll);


export default app;