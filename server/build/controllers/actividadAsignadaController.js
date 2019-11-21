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
class ActividadAsignadaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM ACTIVIDADES_ASIGNADAS', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM ACTIVIDADES_ASIGNADAS WHERE idActividades_asignadas = ?', req.params.id, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO ACTIVIDADES_ASIGNADAS set ?', [req.body]);
            console.log(res.json('{"text":"ACTIVIDADES_ASIGNADAS creada"}'));
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM ACTIVIDADES_ASIGNADAS WHERE idActividades_asignadas = ?', req.params.id, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE ACTIVIDADES_ASIGNADAS SET ? WHERE idActividades_asignadas = ?', [req.body, req.params.id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getActividadesAsignadasByStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let idUser = req.params.idUsuario;
            let consulta = "SELECT * FROM ACTIVIDADES_ASIGNADAS " +
                " INNER JOIN actividad ON actividad.idActividad = actividades_asignadas.idActividad" +
                " INNER JOIN seccion ON seccion.idSeccion = actividad.idSeccion" +
                " INNER JOIN curso ON curso.codCurso = seccion.codCurso " +
                " WHERE ACTIVIDADES_ASIGNADAS.idUsuario = " + idUser;
            yield database_1.default.query(consulta, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
}
exports.actividadAsignadaController = new ActividadAsignadaController();
