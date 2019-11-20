import {Router} from 'express';
import {actividadAsignadaController} from '../controllers/actividadAsignadaController';

class ActividadesAsignadasRoutes{

    public router:Router=Router();

    constructor(){
        this.config();
    }
    
    config():void{

        this.router.get('/',actividadAsignadaController.list);
        //this.router.get('/:id',actividadAsignadaController.getOne);
        this.router.get('/:idUsuario', actividadAsignadaController.getActividadesAsignadasByStudent);
        this.router.post('/',actividadAsignadaController.create);
        this.router.put('/:id',actividadAsignadaController.update);
        this.router.delete('/:id',actividadAsignadaController.delete);
    }
}
const actividadesAsignadasRoutes = new ActividadesAsignadasRoutes();
export default actividadesAsignadasRoutes.router;