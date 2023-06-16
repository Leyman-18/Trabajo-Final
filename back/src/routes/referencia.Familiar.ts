import { Application } from 'express';
import { ReferenciaFamiliarController } from '../controllers/Referencia.Familiar.controller';

export class ReferenciaFamiliarRoutes {
    public referenciaFamiliarController: ReferenciaFamiliarController = new ReferenciaFamiliarController();

    public routes(app: Application): void {
        app.route("/referenciasFamiliar/test").get(this.referenciaFamiliarController.test)
        app.route("/referenciasFamiliar").get(this.referenciaFamiliarController.getAllReferenciaFamiliar)
        app.route("/referenciaFamiliar/:id").get(this.referenciaFamiliarController.getReferenciaFamiliar)
        app.route("/referenciaFamiliar").post(this.referenciaFamiliarController.createReferenciaFamiliar)
        app.route("/referenciaFamiliar/:id").put(this.referenciaFamiliarController.updateReferenciaFamiliar)
        app.route("/referenciaFamiliar/:id").delete(this.referenciaFamiliarController.deleteReferenciaFamiliar)
    }
}