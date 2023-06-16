import { Application } from 'express';
import { DestinoController } from '../controllers/destino.controller';

export class DestinoRoutes {
    public destinoController: DestinoController = new DestinoController();

    public routes(app: Application): void {
        app.route("/destinos/test").get(this.destinoController.test)
        app.route("/destinos").get(this.destinoController.getAllDestino)
        app.route("/destino/:id").get(this.destinoController.getDestino)
        app.route("/destino").post(this.destinoController.createDestino)
        app.route("/destino/:id").put(this.destinoController.updateDestino)
        app.route("/destino/:id").delete(this.destinoController.deleteDestino)
    }
}