import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Bootcamp = sequelize.define(
    "Bootcamps",
    {
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        cue: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: 10,
                min: 5,
            },
        },
        descripcion: {
            type: DataTypes.STRING(1000),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        timestamps: true,
        tableName: "Bootcamps",
    }
);

export default Bootcamp;
