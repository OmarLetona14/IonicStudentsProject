"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultasController_1 = require("../controllers/consultasController");
class ConsultasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/asignaciones', consultasController_1.consultasController.getAllAsignaciones);
        this.router.post('/asignaciones', consultasController_1.consultasController.asignaciones);
        this.router.post('/notas', consultasController_1.consultasController.asignaciones);
        this.router.post('/tickets/contenido', consultasController_1.consultasController.ticketsByContent);
        this.router.post('/tickets/estado', consultasController_1.consultasController.ticketsByState);
        this.router.post('/evaluaciones', consultasController_1.consultasController.evaluacionesByDate);
        this.router.get('/publicaciones', consultasController_1.consultasController.publicaciones);
    }
}
const consultasRouter = new ConsultasRoutes();
exports.default = consultasRouter.router;
