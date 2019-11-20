"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comentarioController_1 = require("../controllers/comentarioController");
class ComentarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', comentarioController_1.comentarioController.list);
        // this.router.get('/:id',comentarioController.getOne);
        this.router.get('/:idPublicacion', comentarioController_1.comentarioController.getByPublish);
        this.router.post('/', comentarioController_1.comentarioController.create);
        this.router.put('/:id', comentarioController_1.comentarioController.update);
        this.router.delete('/:id', comentarioController_1.comentarioController.delete);
    }
}
const comentarioRoutes = new ComentarioRoutes();
exports.default = comentarioRoutes.router;
