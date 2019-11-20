import {Router} from 'express';
import {comentarioController} from '../controllers/comentarioController';

class ComentarioRoutes{

    public router:Router=Router();

    constructor(){
        this.config();
    }
    
    config():void{

        this.router.get('/',comentarioController.list);
       // this.router.get('/:id',comentarioController.getOne);
       this.router.get('/:idPublicacion', comentarioController.getByPublish);
        this.router.post('/',comentarioController.create);
        this.router.put('/:id',comentarioController.update);
        this.router.delete('/:id',comentarioController.delete);
    }
}
const comentarioRoutes = new ComentarioRoutes();
export default comentarioRoutes.router;