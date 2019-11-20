"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evaluacionController_1 = require("../controllers/evaluacionController");
class EvaluacionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', evaluacionController_1.evaluacionController.list);
        this.router.get('/:id', evaluacionController_1.evaluacionController.getOne);
        this.router.post('/', evaluacionController_1.evaluacionController.create);
        this.router.put('/:id', evaluacionController_1.evaluacionController.update);
        this.router.delete('/:id', evaluacionController_1.evaluacionController.delete);
    }
}
const evaluacionRoutes = new EvaluacionRoutes();
exports.default = evaluacionRoutes.router;
