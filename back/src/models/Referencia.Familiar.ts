import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Viajeros } from "./Viajeros";
import { Viaje } from "./Viaje";

export class Referecia extends Model {
  public nombreCliente!: string;
  public direccionCliente!: string;
  public telefonoCliente!: string;
  public idViaje!: number;
  public idViajero!: number;
}

export interface RefereciaI {
  nombreCliente: string;
  direccionCliente: string;
  telefonoCliente: string;
  idViaje: number;
  idViajero: number;
}

Referecia.init(
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
      unique: true,
    }
  },
  {
    tableName: "referencia_familiar",
    sequelize: database,
    timestamps: true,
  }
);
