import {Router} from 'express';
import {respuestaEvaluacionController} from '../controllers/respuestaEvaluacionController';

class RespuestaEvaluacionRoutes{

    public router:Router=Router();

    constructor(){
        this.config();
    }
    
    config():void{

        this.router.get('/',respuestaEvaluacionController.list);
        this.router.get('/:id',respuestaEvaluacionController.getOne);
        this.router.post('/',respuestaEvaluacionController.create);
        this.router.put('/:id',respuestaEvaluacionController.update);
        this.router.delete('/:id',respuestaEvaluacionController.delete);
    }
}
const respuestaEvaluacionRoutes = new RespuestaEvaluacionRoutes();
export default respuestaEvaluacionRoutes.router;