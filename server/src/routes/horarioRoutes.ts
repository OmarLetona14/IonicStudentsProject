import {Router} from 'express';
import {horarioController} from '../controllers/horarioController';

class HorarioRoutes{

    public router:Router=Router();

    constructor(){
        this.config();
    }
    
    config():void{

        this.router.get('/',horarioController.list);
        this.router.get('/:id',horarioController.getOne);
        this.router.post('/',horarioController.create);
        this.router.delete('/:id',horarioController.delete);
        this.router.put('/:id',horarioController.update);
    }
}
const horarioRoutes = new HorarioRoutes();
export default horarioRoutes.router;