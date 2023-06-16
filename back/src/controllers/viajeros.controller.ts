import { Request, Response } from "express";
import { where } from "sequelize/types";

import { Viajeros, ViajerosI } from "../models/Viajeros";

export class ViajerosController {
    public async test(req: Request, res: Response) {
        try {
            res.send("hola, metodo test para Viajeros");
        } catch (error) {}
    }
    public async getAllViajeros(req: Request, res: Response) {
        try {
            const viajeros: ViajerosI[] = await Viajeros.findAll(); // select * from clientes;
            res.status(200).json({ viajeros });
        } catch (error) {}
    }

    public async getViajeros(req: Request, res: Response) {
        const { id: idParam } = req.params
        try{
            const viajeros:ViajerosI | null = await Viajeros.findOne({
                where: {
                    id: idParam,
                }
            })
            if(viajeros){
                res.status(200).json({viajeros})
            } else return res.status(300).json({msg: "El viajero no existe"})
        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async createViajeros(req: Request, res: Response) {
        try {
            let body: ViajerosI | any = req.body;
            let viajeros: ViajerosI = await Viajeros.create(body);
            res.status(200).json({ viajeros });
        } catch (error) {}
    }
    
    public async updateViajeros(req: Request, res: Response) {
        const { id:pk } = req.params;

        const {
            id,
            nombreCliente,
            direccionCliente,
            telefonoCliente,
        }=req.body

        try{
            let body: ViajerosI = {
                nombreCliente,
                direccionCliente,
                telefonoCliente,
            }

            const viajeroExist: ViajerosI | null = await Viajeros.findByPk(pk);

            if(!viajeroExist) return res.status(500).json({msg:"El viajero no existe"})
            await Viajeros.update(body, {
                where: {id:pk}
            });
        }catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
        const viajeros: ViajerosI | null = await Viajeros.findByPk(pk);
        if(viajeros) return res.status(200).json({viajeros})
    }
    
    public async deleteViajeros(req: Request, res: Response) {
        const { id:pk } = req.params;
        try {
            const VajerosExist: ViajerosI | null = await Viajeros.findByPk(pk);
            if(!VajerosExist) return res.status(500).json({msg:"El viajero no existe"})
            await Viajeros.destroy({
                where:{id:pk}
            })
            res.status(200).json({msg:"viajero eliminado"})
        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }
}