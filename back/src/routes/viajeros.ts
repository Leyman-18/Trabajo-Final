import { Application } from 'express';
import { ViajerosController } from '../controllers/viajeros.controller';

export class ViajerosRoutes {
    public viajerosController: ViajerosController = new ViajerosController();

    public routes(app: Application): void {
        app.route("/viajeros/test").get(this.viajerosController.test)
        app.route("/viajeros").get(this.viajerosController.getAllViajeros)
        app.route("/viajero/:id").get(this.viajerosController.getViajeros)
        app.route("/viajero").post(this.viajerosController.createViajeros)
        app.route("/viajero/:id").put(this.viajerosController.updateViajeros)
        app.route("/viajero/:id").delete(this.viajerosController.deleteViajeros)
    }
}