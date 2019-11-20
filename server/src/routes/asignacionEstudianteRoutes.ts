import {Router} from 'express';
import {asignacionEstudianteController} from '../controllers/asignacionEstudianteController';

class AsignacionEstudianteRoutes{

    public router:Router=Router();

    constructor(){
        this.config();
    }
    
    config():void{

        this.router.get('/',asignacionEstudianteController.list);
        this.router.get('/:idUsuario', asignacionEstudianteController.getByEstudiante);
       // this.router.get('/:id',asignacionEstudianteController.getOne);
        this.router.post('/',asignacionEstudianteController.create);
        this.router.put('/:id',asignacionEstudianteController.update);
        this.router.delete('/:id',asignacionEstudianteController.delete);
        
    }
}
const asignacionEstudianteRoutes = new AsignacionEstudianteRoutes();
export default asignacionEstudianteRoutes.router;