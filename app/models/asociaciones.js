import User from "./user.model.js";
import Bootcamp from "./bootcamp.model.js";

//RELACIÓN MUCHOS A MUCHOS
User.belongsToMany(Bootcamp, {
    through: "User_Bootcamp",
    foreignKey: "user_id",
    as: "bootcamps"
});

Bootcamp.belongsToMany(User, {
    through: "User_Bootcamp",
    foreignKey: "bootcamp_id",
    as: "users"
});