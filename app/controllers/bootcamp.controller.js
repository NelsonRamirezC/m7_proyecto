import User from "../models/user.model.js";
import Bootcamp  from "../models/bootcamp.model.js";

export const createBootcamp = async (req, res) => {
    let { title, cue, descripcion } = req.body;

    let bootcamp = await Bootcamp.create({
        title,
        cue,
        descripcion,
    });

    console.log("Se ha creado el bootcamp: ", bootcamp.toJSON());

    res.status(201).json({
        code: 201,
        message: "bootcamp creado con éxito.",
        bootcamp,
    });
};

export const addUser = async (req, res) => {

    try {
        let { bootcampId, userId } = req.body;

        let bootcamp = await Bootcamp.findByPk(bootcampId);
        let user = await User.findByPk(userId);

        //SE AGREGA UN USUARIO AL BOOTCAMP.
        await bootcamp.addUser(user);;

        if (!bootcamp || !user) {
            return res
                .status(400)
                .json({
                    code: 400,
                    message:
                        "Usuario o bootcamp no existe, verifique los datos.",
                });
        }

        //agregando usuario al bootcamp

        console.log(
            `Agregado el usuario id=${userId} al bootcamp con id=${bootcampId}`
        );

        res.status(201).json({
            code: 201,
            message: `Se ha vinculado correctamente el usuario: '${user.firstName}' al bootcamp: '${bootcamp.title}'`,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({code: 500, message: "Error al procesar la solicitud de agregar usuario al bootcamp."})
    }

};

export const findById = (req, res) => {
    res.send("Buscando bootcamp por id.");
};

export const findAll = (req, res) => {
    res.send("Traer todos los bootcamps");
};
