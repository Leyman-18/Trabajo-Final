import { Request, Response } from "express";
import { where } from "sequelize/types";

import { Destino, DestinoI } from "../models/Destino";

export class DestinoController {
    public async test(req: Request, res: Response) {
        try {
            res.send("hola, metodo test para Destino");
        } catch (error) {}
    }
    public async getAllDestino(req: Request, res: Response) {
        try {
            const destino: DestinoI[] = await Destino.findAll(); // select * from clientes;
            res.status(200).json({ destino });
        } catch (error) {}
    }
    public async getDestino(req: Request, res: Response) {
        try {
            let destino: DestinoI | any = await Destino.findOne(
                { where: { id: req.params.id, activo: true } },
            );
            if (destino) {
                res.status(200).json({ destino });
            }else{
                res.status(404).json({ msg: "Destino no encontrado" });
            }
        } catch (error) {}
    }
    public async createDestino(req: Request, res: Response) {
        try {
            let body: DestinoI | any = req.body;
            let destino: DestinoI = await Destino.create(body);
            res.status(200).json({ destino });
        } catch (error) {}
    }
    public async updateDestino(req: Request, res: Response) {
        try {
            let body: DestinoI | any = req.body;
            let id: number = parseInt(req.params.id);
            let destino: DestinoI | any = await Destino.findByPk(id);
            if (destino) {
                await destino.update(body);
                res.status(200).json({ destino });
            }
        } catch (error) {}
    }
    public async deleteDestino(req: Request, res: Response) {
        try {
            let id: number = parseInt(req.params.id);
            let destino: DestinoI | any = await Destino.findByPk(id);
            if (destino) {
                await destino.update({ activo: false });
                res.status(200).json({ destino });
            }
        } catch (error) {}
    }
}