"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const respuestaPreguntaController_1 = require("../controllers/respuestaPreguntaController");
class RespuestaPreguntaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', respuestaPreguntaController_1.respuestaPreguntaController.list);
        this.router.get('/:id', respuestaPreguntaController_1.respuestaPreguntaController.getOne);
        this.router.post('/', respuestaPreguntaController_1.respuestaPreguntaController.create);
        this.router.put('/:id', respuestaPreguntaController_1.respuestaPreguntaController.update);
        this.router.delete('/:id', respuestaPreguntaController_1.respuestaPreguntaController.delete);
    }
}
const respuestaPreguntaRoutes = new RespuestaPreguntaRoutes();
exports.default = respuestaPreguntaRoutes.router;
