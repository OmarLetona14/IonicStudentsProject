"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const respuestaEvaluacionController_1 = require("../controllers/respuestaEvaluacionController");
class RespuestaEvaluacionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', respuestaEvaluacionController_1.respuestaEvaluacionController.list);
        this.router.get('/:id', respuestaEvaluacionController_1.respuestaEvaluacionController.getOne);
        this.router.post('/', respuestaEvaluacionController_1.respuestaEvaluacionController.create);
        this.router.put('/:id', respuestaEvaluacionController_1.respuestaEvaluacionController.update);
        this.router.delete('/:id', respuestaEvaluacionController_1.respuestaEvaluacionController.delete);
    }
}
const respuestaEvaluacionRoutes = new RespuestaEvaluacionRoutes();
exports.default = respuestaEvaluacionRoutes.router;
