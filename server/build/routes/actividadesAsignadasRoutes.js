"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actividadAsignadaController_1 = require("../controllers/actividadAsignadaController");
class ActividadesAsignadasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', actividadAsignadaController_1.actividadAsignadaController.list);
        //this.router.get('/:id',actividadAsignadaController.getOne);
        this.router.get('/:idUsuario', actividadAsignadaController_1.actividadAsignadaController.getActividadesAsignadasByStudent);
        this.router.post('/', actividadAsignadaController_1.actividadAsignadaController.create);
        this.router.put('/:id', actividadAsignadaController_1.actividadAsignadaController.update);
        this.router.delete('/:id', actividadAsignadaController_1.actividadAsignadaController.delete);
    }
}
const actividadesAsignadasRoutes = new ActividadesAsignadasRoutes();
exports.default = actividadesAsignadasRoutes.router;
