import { Request, Response } from "express";
import { where } from "sequelize/types";

import { Referecia, RefereciaI } from "../models/Referencia.Familiar";

export class ReferenciaFamiliarController {
    public async test(req: Request, res: Response) {
        try {
            res.send("hola, metodo test para ReferenciaFamiliar");
        } catch (error) {}
    }
    public async getAllReferenciaFamiliar(req: Request, res: Response) {
        try {
            const referencia: RefereciaI[] = await Referecia.findAll(); // select * from clientes;
            res.status(200).json({ referencia });
        } catch (error) {}
    }
    public async getReferenciaFamiliar(req: Request, res: Response) {
        try {
            let referencia: RefereciaI | any = await Referecia.findOne(
                { where: { id: req.params.id, activo: true } },
            );
            if (referencia) {
                res.status(200).json({ referencia });
            }else{
                res.status(404).json({ msg: "Referencia no encontrada" });
            }
        } catch (error) {}
    }
    public async createReferenciaFamiliar(req: Request, res: Response) {
        try {
            let body: RefereciaI | any = req.body;
            let referencia: RefereciaI = await Referecia.create(body);
            res.status(200).json({ referencia });
        } catch (error) {}
    }
    public async updateReferenciaFamiliar(req: Request, res: Response) {
        try {
            let body: RefereciaI | any = req.body;
            let id: number = parseInt(req.params.id);
            let referencia: RefereciaI | any = await Referecia.findByPk(id);
            if (referencia) {
                await referencia.update(body);
                res.status(200).json({ referencia });
            }
        } catch (error) {}
    }
    public async deleteReferenciaFamiliar(req: Request, res: Response) {
        try {
            let id: number = parseInt(req.params.id);
            let referencia: RefereciaI | any = await Referecia.findByPk(id);
            if (referencia) {
                await referencia.update({ activo: false });
                res.status(200).json({ referencia });
            }
        } catch (error) {}
    }
}
