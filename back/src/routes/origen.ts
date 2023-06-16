import { Application } from 'express';
import { OrigenController } from '../controllers/origen.controller';

export class OrigenRoutes {
    public origenController: OrigenController = new OrigenController();

    public routes(app: Application): void {
        app.route("/origenes/test").get(this.origenController.test)
        app.route("/origenes").get(this.origenController.getAllOrigen)
        app.route("/origen/:id").get(this.origenController.getOrigen)
        app.route("/origen").post(this.origenController.createOrigen)
        app.route("/origen/:id").put(this.origenController.updateOrigen)
        app.route("/origen/:id").delete(this.origenController.deleteOrigen)
    }
}