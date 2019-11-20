"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const respuestaController_1 = require("../controllers/respuestaController");
class RespuestaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', respuestaController_1.respuestaController.list);
        this.router.get('/:id', respuestaController_1.respuestaController.getOne);
        this.router.post('/', respuestaController_1.respuestaController.create);
        this.router.put('/:id', respuestaController_1.respuestaController.update);
        this.router.delete('/:id', respuestaController_1.respuestaController.delete);
    }
}
const respuestaRoutes = new RespuestaRoutes();
exports.default = respuestaRoutes.router;
