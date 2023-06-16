import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Origen } from "./Origen"
import { Destino } from "./Destino";
import { Referecia } from "./Referencia.Familiar";

export class Viaje extends Model {
  public numeroPlazas!: number;
  public frv!: number;
  public idViajero!: number;
}

export interface ViajeI {
  numeroPlazas: number;
  frv: number;
  idViajero: number;
}

Viaje.init(
  {
    numeroPlazas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    frv: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Vieajes",
    sequelize: database,
    timestamps: true,
  }
);
// creamos la relacion entre viaje y origen con llave foranea
Viaje.hasMany(Origen, { as: "origen", foreignKey: "idViaje" });
Origen.belongsTo(Viaje, { as: "viaje", foreignKey: "idViaje" });

// creamos la relacion entre viaje y destino con llave foranea
Viaje.hasMany(Destino, { as: "destino", foreignKey: "idViaje" });
Destino.belongsTo(Viaje, { as: "viaje", foreignKey: "idViaje" });

// creamos la relacion entre viaje y referencia con llave foranea
Viaje.hasMany(Referecia, { as: "referencia", foreignKey: "idViaje" });
Referecia.belongsTo(Viaje, { as: "viaje", foreignKey: "idViaje" });



