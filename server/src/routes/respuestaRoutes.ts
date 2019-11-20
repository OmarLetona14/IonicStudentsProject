import {Router} from 'express';
import {respuestaController} from '../controllers/respuestaController';

class RespuestaRoutes{

    public router:Router=Router();

    constructor(){
        this.config();
    }
    
    config():void{

        this.router.get('/',respuestaController.list);
        this.router.get('/:id',respuestaController.getOne);
        this.router.post('/',respuestaController.create);
        this.router.put('/:id',respuestaController.update);
        this.router.delete('/:id',respuestaController.delete);
         
    }
}
const respuestaRoutes = new RespuestaRoutes();
export default respuestaRoutes.router;