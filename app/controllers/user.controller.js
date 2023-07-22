import User from "../models/user.model.js";

const createUser = async (req, res) => {
    let { firstName, lastName, email } = req.body;

    let usuario = await User.create({
        firstName,
        lastName,
        email,
    });

    console.log("Se ha creado el usuario: ", usuario.toJSON());
    res.status(201).json({ code: 201, message: "usuario creado con éxito.", usuario });
};

const findUserById = (req, res) => {
    res.send("traer usuario por id");
};

const findAll = (req, res) => {
    res.send("traer todos los usuarios");
};

const updateUserById = (req, res) => {
    res.send("actualizar usuario por id");
};

const deleteUserById = (req, res) => {
    res.send("eliminar usuario por id");
};

const controladores = {
    createUser,
    findUserById,
    findAll,
    updateUserById,
    deleteUserById,
};

export default controladores;
