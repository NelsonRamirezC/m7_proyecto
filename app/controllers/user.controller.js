import User from "../models/user.model.js";
import Bootcamp from "../models/bootcamp.model.js";

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

const findUserById = async (req, res) => {
    let id = req.params.id;

    let usuario = await User.findByPk(id, {
        include: [
            {
                model: Bootcamp,
                as: "bootcamps",
            },
        ],
    });

    if (!usuario) {
        return res.status(404).json({code: 404, message: "Usuario no encontrado."})
    }

    usuario = usuario.toJSON();

    console.log("Usuario", usuario);

    res.json({ code: 200, message: "Usuario encontrado.", usuario });
    try {
        
    } catch (error) {
        res.status(500).json({ code: 500, message: "Algo salió mal al filtrar el usuario por ID." })
    }
    
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
