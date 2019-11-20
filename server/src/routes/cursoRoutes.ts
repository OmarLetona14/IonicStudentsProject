import {Router} from 'express';
import {cursoController} from '../controllers/cursoController';

class CursoRoutes{

    public router:Router=Router();

    constructor(){
        this.config();
    }
    
    config():void{

        this.router.get('/',cursoController.list);
        this.router.get('/:id',cursoController.getOne);
        this.router.post('/',cursoController.create);
        this.router.put('/:id',cursoController.update);
        this.router.delete('/:id',cursoController.delete);
        
    }
}
const cursoRoutes = new CursoRoutes();
export default cursoRoutes.router;