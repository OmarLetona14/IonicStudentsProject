import {Router} from 'express';
import {respuestaPreguntaController} from '../controllers/respuestaPreguntaController';

class RespuestaPreguntaRoutes{

    public router:Router=Router();

    constructor(){
        this.config();
    }
    
    config():void{
        this.router.get('/',respuestaPreguntaController.list);
        this.router.get('/:id',respuestaPreguntaController.getOne);
        this.router.post('/',respuestaPreguntaController.create);
        this.router.put('/:id',respuestaPreguntaController.update);
        this.router.delete('/:id',respuestaPreguntaController.delete);
    }
}
const respuestaPreguntaRoutes = new RespuestaPreguntaRoutes();
export default respuestaPreguntaRoutes.router;