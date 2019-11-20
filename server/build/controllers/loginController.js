"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class LoginController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM Usuario WHERE ' + 'nombre_usuario = ' + "\'" + req.body.nombre_usuario + "\'" + ' AND contrasenia = ' + "\'" + req.body.contrasenia + "\'", function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    parsearNombre(req) {
        let peticion = JSON.stringify(req.body).split(',');
        let nombreUsuario = peticion[0];
        let nombres = nombreUsuario.split(':');
        let nombreFinal = nombres[1].replace('"', '');
        return nombreFinal;
    }
    parsearContrasenia(req) {
        let peticion = JSON.stringify(req.body).split(',');
        let pass = peticion[1];
        let contrasenias = pass.split(':');
        let contraseniaFinal = contrasenias[1].replace('"', '');
        return contraseniaFinal;
    }
}
exports.loginController = new LoginController();
