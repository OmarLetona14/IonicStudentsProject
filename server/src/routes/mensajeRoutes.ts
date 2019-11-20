import {Router} from 'express';
import {mensajeController} from '../controllers/mensajeController';

class MensajeRoutes{

    public router:Router=Router();

    constructor(){
        this.config();
    }
    
    config():void{

        this.router.get('/',mensajeController.list);
    //  this.router.get('/:id',mensajeController.getOne);
        this.router.get('/:idUsuario', mensajeController.getMensajesByUser);
        this.router.post('/',mensajeController.create);
        this.router.put('/:id',mensajeController.update);
        this.router.delete('/:id',mensajeController.delete);
    }
}
const mensajeRoutes = new MensajeRoutes();
export default mensajeRoutes.router;