import {Router} from 'express';
import {consultasController} from '../controllers/consultasController';

class ConsultasRoutes{

    public router:Router=Router();

    constructor(){
        this.config();
    }
    
    config():void{
        this.router.get('/asignaciones',consultasController.getAllAsignaciones);
        this.router.post('/asignaciones',consultasController.asignaciones);
        this.router.post('/notas',consultasController.asignaciones);
        this.router.post('/tickets/contenido',consultasController.ticketsByContent);
        this.router.post('/tickets/estado',consultasController.ticketsByState);
        this.router.post('/evaluaciones', consultasController.evaluacionesByDate);
        this.router.get('/publicaciones',consultasController.publicaciones);
    }
}
const consultasRouter = new ConsultasRoutes();
export default consultasRouter.router;