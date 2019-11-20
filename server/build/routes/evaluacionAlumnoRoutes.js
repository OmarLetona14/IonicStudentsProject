"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evaluacionAlumnoController_1 = require("../controllers/evaluacionAlumnoController");
class EvaluacionAlumnoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', evaluacionAlumnoController_1.evaluacionAlumnoController.list);
        this.router.get('/:id', evaluacionAlumnoController_1.evaluacionAlumnoController.getOne);
        this.router.post('/', evaluacionAlumnoController_1.evaluacionAlumnoController.create);
        this.router.put('/:id', evaluacionAlumnoController_1.evaluacionAlumnoController.update);
        this.router.delete('/:id', evaluacionAlumnoController_1.evaluacionAlumnoController.delete);
    }
}
const evaluacionAlumnoRoutes = new EvaluacionAlumnoRoutes();
exports.default = evaluacionAlumnoRoutes.router;
