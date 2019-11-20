import {Router} from 'express';
import {evaluacionAlumnoController} from '../controllers/evaluacionAlumnoController';

class EvaluacionAlumnoRoutes{

    public router:Router=Router();

    constructor(){
        this.config();
    }
    
    config():void{

        this.router.get('/',evaluacionAlumnoController.list);
        this.router.get('/:id',evaluacionAlumnoController.getOne);
        this.router.post('/',evaluacionAlumnoController.create);
        this.router.put('/:id',evaluacionAlumnoController.update);
        this.router.delete('/:id',evaluacionAlumnoController.delete);
    }
}
const evaluacionAlumnoRoutes = new EvaluacionAlumnoRoutes();
export default evaluacionAlumnoRoutes.router;