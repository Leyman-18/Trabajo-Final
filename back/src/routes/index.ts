import { DestinoRoutes } from "./destino";
import { OrigenRoutes } from "./origen";
import { ReferenciaFamiliarRoutes } from "./referencia.Familiar";
import { ViajesRoutes } from "./viaje";
import { ViajerosRoutes } from "./viajeros";

export class Routes {
    public destinoRoutes: DestinoRoutes = new DestinoRoutes();
    public origenRoutes: OrigenRoutes = new OrigenRoutes();
    public referenciaFamiliarRoutes: ReferenciaFamiliarRoutes = new ReferenciaFamiliarRoutes();
    public viajesRoutes: ViajesRoutes = new ViajesRoutes();
    public viajerosRoutes: ViajerosRoutes = new ViajerosRoutes();
}
