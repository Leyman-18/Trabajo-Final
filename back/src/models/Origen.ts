import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Viaje } from "./Viaje";

export class Origen extends Model {
  public codigoOrigen!: number;
  public idViaje!: number;
}

export interface OrigenI {
  codigoOrigen: number;
  idViaje: number;
}

Origen.init(
  {
    codigoOrigen: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: "origens",
    sequelize: database,
    timestamps: true,
  }
);