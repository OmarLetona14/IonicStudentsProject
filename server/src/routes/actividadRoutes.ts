import {Router} from 'express';
import {actividadController} from '../controllers/actividadController';

class ActividadRoutes{

    public router:Router=Router();

    constructor(){
        this.config();
    }
    
    config():void{

        this.router.get('/',actividadController.list);
        this.router.get('/:id',actividadController.getOne);
        this.router.post('/',actividadController.create);
        this.router.put('/:id',actividadController.update);
        this.router.delete('/:id',actividadController.delete);
    }
}
const actividadRoutes = new ActividadRoutes();
export default actividadRoutes.router;