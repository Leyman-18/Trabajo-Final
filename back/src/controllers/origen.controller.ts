import { Request, Response } from "express";
import { where } from "sequelize/types";

import { Origen, OrigenI } from "../models/Origen";

export class OrigenController {
    public async test(req: Request, res: Response) {
        try {
            res.send("hola, metodo test para Origen");
        } catch (error) {}
    }
    public async getAllOrigen(req: Request, res: Response) {
        try {
            const origen: OrigenI[] = await Origen.findAll(); // select * from clientes;
            res.status(200).json({ origen });
        } catch (error) {}
    }
    public async getOrigen(req: Request, res: Response) {
        try {
            let origen: OrigenI | any = await Origen.findOne(
                { where: { id: req.params.id, activo: true } },
            );
            if (origen) {
                res.status(200).json({ origen });
            }else{
                res.status(404).json({ msg: "Origen no encontrado" });
            }
        } catch (error) {}
    }
    public async createOrigen(req: Request, res: Response) {
        try {
            let body: OrigenI | any = req.body;
            let origen: OrigenI = await Origen.create(body);
            res.status(200).json({ origen });
        } catch (error) {}
    }
    public async updateOrigen(req: Request, res: Response) {
        try {
            let body: OrigenI | any = req.body;
            let id: number = parseInt(req.params.id);
            let origen: OrigenI | any = await Origen.findByPk(id);
            if (origen) {
                await origen.update(body);
                res.status(200).json({ origen });
            }
        } catch (error) {}
    }
    public async deleteOrigen(req: Request, res: Response) {
        try {
            let id: number = parseInt(req.params.id);
            let origen: OrigenI | any = await Origen.findByPk(id);
            if (origen) {
                await origen.update({ activo: false });
                res.status(200).json({ origen });
            }
        } catch (error) {}
    }
}