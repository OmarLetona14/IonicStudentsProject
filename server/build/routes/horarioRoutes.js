"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const horarioController_1 = require("../controllers/horarioController");
class HorarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', horarioController_1.horarioController.list);
        this.router.get('/:id', horarioController_1.horarioController.getOne);
        this.router.post('/', horarioController_1.horarioController.create);
        this.router.delete('/:id', horarioController_1.horarioController.delete);
        this.router.put('/:id', horarioController_1.horarioController.update);
    }
}
const horarioRoutes = new HorarioRoutes();
exports.default = horarioRoutes.router;
