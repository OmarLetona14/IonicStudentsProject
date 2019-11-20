"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actividadController_1 = require("../controllers/actividadController");
class ActividadRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', actividadController_1.actividadController.list);
        this.router.get('/:id', actividadController_1.actividadController.getOne);
        this.router.post('/', actividadController_1.actividadController.create);
        this.router.put('/:id', actividadController_1.actividadController.update);
        this.router.delete('/:id', actividadController_1.actividadController.delete);
    }
}
const actividadRoutes = new ActividadRoutes();
exports.default = actividadRoutes.router;
