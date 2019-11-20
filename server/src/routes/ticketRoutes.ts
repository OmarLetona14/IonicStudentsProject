import {Router} from 'express';
import {ticketsController} from '../controllers/ticketController';

class TicketRoutes{

    public router:Router=Router();

    constructor(){
        this.config();
    }
    
    config():void{

        this.router.get('/',ticketsController.list);
        //this.router.get('/:id',ticketsController.getOne);
        this.router.get('/:idEstudiante',ticketsController.getByStudent);
        this.router.post('/',ticketsController.create);
        this.router.put('/:id',ticketsController.update);
        this.router.delete('/:id',ticketsController.delete);
    }
}
const ticketRoutes = new TicketRoutes();
export default ticketRoutes.router;