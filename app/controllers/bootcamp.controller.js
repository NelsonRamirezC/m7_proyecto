export const createBootcamp = (req, res) => {
    res.send("Creando bootcamp");
};

export const addUser = (req, res) => {
    res.send("agregando usuario al bootcamp");
};

export const findById = (req, res) => {
    res.send("Buscando bootcamp por id.");
};

export const findAll = (req, res) => {
    res.send("Traer todos los bootcamps");
};
