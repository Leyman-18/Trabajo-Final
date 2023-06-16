import { Application } from 'express';
import { ViajeController } from '../controllers/viaje.controller';

export class ViajesRoutes {
    public viajeController: ViajeController = new ViajeController();

    public routes(app: Application): void {
        app.route('/testViaje').get(this.viajeController.test);
        app.route('/viajes').get(this.viajeController.getAllViajes);
        app.route('/viaje/:id').get(this.viajeController.getViajes);
        app.route('/viaje').post(this.viajeController.createViajes);
        app.route('/viaje/:id').put(this.viajeController.updateViajes);
        app.route('/viaje/:id').delete(this.viajeController.deleteViajes);
    }
}