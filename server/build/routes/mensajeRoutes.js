"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mensajeController_1 = require("../controllers/mensajeController");
class MensajeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', mensajeController_1.mensajeController.list);
        //  this.router.get('/:id',mensajeController.getOne);
        this.router.get('/:idUsuario', mensajeController_1.mensajeController.getMensajesByUser);
        this.router.post('/', mensajeController_1.mensajeController.create);
        this.router.put('/:id', mensajeController_1.mensajeController.update);
        this.router.delete('/:id', mensajeController_1.mensajeController.delete);
    }
}
const mensajeRoutes = new MensajeRoutes();
exports.default = mensajeRoutes.router;
