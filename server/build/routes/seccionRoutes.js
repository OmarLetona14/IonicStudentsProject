"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const seccionController_1 = require("../controllers/seccionController");
class SeccionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', seccionController_1.seccionController.list);
        this.router.get('/:id', seccionController_1.seccionController.getOne);
        this.router.post('/', seccionController_1.seccionController.create);
        this.router.put('/:id', seccionController_1.seccionController.update);
        this.router.delete('/:id', seccionController_1.seccionController.delete);
    }
}
const seccionRoutes = new SeccionRoutes();
exports.default = seccionRoutes.router;
