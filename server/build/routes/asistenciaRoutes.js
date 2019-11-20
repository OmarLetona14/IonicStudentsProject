"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asistenciaController_1 = require("../controllers/asistenciaController");
class AsistenciaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', asistenciaController_1.asistenciaController.list);
        this.router.get('/:id', asistenciaController_1.asistenciaController.getOne);
        this.router.post('/', asistenciaController_1.asistenciaController.create);
        this.router.put('/:id', asistenciaController_1.asistenciaController.update);
        this.router.delete('/:id', asistenciaController_1.asistenciaController.delete);
    }
}
const asistenciaRoutes = new AsistenciaRoutes();
exports.default = asistenciaRoutes.router;
