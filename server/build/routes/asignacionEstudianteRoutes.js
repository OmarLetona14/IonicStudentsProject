"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asignacionEstudianteController_1 = require("../controllers/asignacionEstudianteController");
class AsignacionEstudianteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', asignacionEstudianteController_1.asignacionEstudianteController.list);
        this.router.get('/:idUsuario', asignacionEstudianteController_1.asignacionEstudianteController.getByEstudiante);
        // this.router.get('/:id',asignacionEstudianteController.getOne);
        this.router.post('/', asignacionEstudianteController_1.asignacionEstudianteController.create);
        this.router.put('/:id', asignacionEstudianteController_1.asignacionEstudianteController.update);
        this.router.delete('/:id', asignacionEstudianteController_1.asignacionEstudianteController.delete);
    }
}
const asignacionEstudianteRoutes = new AsignacionEstudianteRoutes();
exports.default = asignacionEstudianteRoutes.router;
