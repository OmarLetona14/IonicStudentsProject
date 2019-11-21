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
class ConsultasController {
    asignaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let idSeccion = req.body.idSeccion;
            let consulta = 'SELECT * FROM USUARIO INNER JOIN asignacion_estudiante ON USUARIO.idUsuario = asignacion_estudiante.idUsuario ' +
                'INNER JOIN seccion ON asignacion_estudiante.idSeccion = seccion.idSeccion' +
                ' INNER JOIN horario ON seccion.idHorario = horario.idHorario' +
                'INNER JOIN curso ON curso.codCurso = seccion.codCurso' +
                ' WHERE seccion.idSeccion = ' + idSeccion;
            yield database_1.default.query(consulta, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getAllAsignaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let consulta = 'SELECT * FROM USUARIO INNER JOIN asignacion_estudiante ON USUARIO.idUsuario = asignacion_estudiante.idUsuario ' +
                'INNER JOIN seccion ON asignacion_estudiante.idSeccion = seccion.idSeccion' +
                ' INNER JOIN horario ON seccion.idHorario = horario.idHorario' +
                ' INNER JOIN curso ON curso.codCurso = seccion.codCurso';
            yield database_1.default.query(consulta, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    ticketsByContent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let contenido = req.body.contenido;
            let consulta = "SELECT * FROM TICKET WHERE contenido like " + "\'%" + contenido + "%\'";
            yield database_1.default.query(consulta, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    ticketsByState(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let estado = req.body.estado;
            let consulta = "SELECT * FROM TICKET WHERE estado = " + "\'" + estado + "\'";
            yield database_1.default.query(consulta, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    evaluacionesByDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let fecha_1 = req.body.fecha_1;
            let fecha_2 = req.body.fecha_2;
            let consulta = "SELECT * FROM EVALUACION WHERE fecha_creacion between " + "\'" + fecha_1 + "\'" + " AND " + "\'" + fecha_2 + "\'";
            yield database_1.default.query(consulta, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    publicaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let consulta = "SELECT * FROM PUBLICACION " +
                'INNER JOIN usuario ON usuario.idUsuario = publicacion.idUsuario';
            yield database_1.default.query(consulta, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    asistencia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM ASISTENCIA WHERE idAsistencia = ?', req.params.id, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getPrueba(req, res) {
        res.json('{text:mensaje}');
    }
}
exports.consultasController = new ConsultasController();
