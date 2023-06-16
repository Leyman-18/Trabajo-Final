import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Destino extends Model {
  public codigoDestino!: number;
  public idViaje!: number;
}

export interface DestinoI {
  codigoDestino: number;
  idViaje: number;
}

Destino.init(
  {
    codigoOrigen: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: "destinos",
    sequelize: database,
    timestamps: true,
  }
);