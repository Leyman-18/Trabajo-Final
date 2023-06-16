import { Request, Response } from "express";
import { where } from "sequelize/types";

import { Viaje, ViajeI } from "../models/Viaje";

export class ViajeController {
    public async test(req: Request, res: Response) {
        try {
            res.send("hola, metodo test para Viaje");
        } catch (error) {}
    }
    public async getAllViajes(req: Request, res: Response) {
        try {
            const viaje: ViajeI[] = await Viaje.findAll(); // select * from clientes;
            res.status(200).json({ viaje });
        } catch (error) {}
    }
    public async getViajes(req: Request, res: Response) {
        const { id: idParam } = req.params
        try {
            const viaje: ViajeI | null = await Viaje.findOne({ 
                where: { 
                    id: idParam,
                } 
            });
            if (viaje) {
                res.status(200).json({ viaje });
            }else{
                res.status(404).json({ msg: "Viaje no encontrado" });
            }
        } catch (error) {}
    }
    public async createViajes(req: Request, res: Response) {
        try {
            let body: ViajeI | any = req.body;
            let viaje: ViajeI = await Viaje.create(body);
            res.status(200).json({ viaje });
        } catch (error) {}
    }
    public async updateViajes(req: Request, res: Response) {
        try {
            let body: ViajeI | any = req.body;
            let id: number = parseInt(req.params.id);
            let viaje: ViajeI | any = await Viaje.findByPk(id);
            if (viaje) {
                await viaje.update(body);
                res.status(200).json({ viaje });
            }
        } catch (error) {}
    }
    public async deleteViajes(req: Request, res: Response) {
        try {
            let id: number = parseInt(req.params.id);
            let viaje: ViajeI | any = await Viaje.findByPk(id);
            if (viaje) {
                await viaje.update({ activo: false });
                res.status(200).json({ viaje });
            }
        } catch (error) {}
    }
}