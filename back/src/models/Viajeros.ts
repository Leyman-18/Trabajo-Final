import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Viaje } from "./Viaje";
import { Referecia } from "./Referencia.Familiar";

export class Viajeros extends Model {
  public nombreCliente!: string;
  public direccionCliente!: string;
  public telefonoCliente!: string;
}

export interface ViajerosI {
  nombreCliente: string;
  direccionCliente: string;
  telefonoCliente: string;
}

Viajeros.init(
  {
    nombreCliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccionCliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefonoCliente: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: "Viajeros",
    sequelize: database,
    timestamps: true,
  }
);
// creamos la relacion entre viajeros y viaje con llave foranea
Viajeros.hasMany(Viaje, { as: "viaje", foreignKey: "idViajero" });
Viaje.belongsTo(Viajeros, { as: "viajeros", foreignKey: "idViajero" });

// creamos la relacion entre viajeros y referencia con llave foranea
Viajeros.hasMany(Referecia, { as: "referencia", foreignKey: "idViajero" });
Referecia.belongsTo(Viajeros, { as: "viajeros", foreignKey: "idViajero" });