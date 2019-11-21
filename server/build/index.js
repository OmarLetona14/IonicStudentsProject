"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const cursoRoutes_1 = __importDefault(require("./routes/cursoRoutes"));
const horarioRoutes_1 = __importDefault(require("./routes/horarioRoutes"));
const seccionRoutes_1 = __importDefault(require("./routes/seccionRoutes"));
const asignacionEstudianteRoutes_1 = __importDefault(require("./routes/asignacionEstudianteRoutes"));
const mensajeRoutes_1 = __importDefault(require("./routes/mensajeRoutes"));
const publicacionRoutes_1 = __importDefault(require("./routes/publicacionRoutes"));
const comentarioRoutes_1 = __importDefault(require("./routes/comentarioRoutes"));
const asistenciaRoutes_1 = __importDefault(require("./routes/asistenciaRoutes"));
const ticketRoutes_1 = __importDefault(require("./routes/ticketRoutes"));
const actividadRoutes_1 = __importDefault(require("./routes/actividadRoutes"));
const actividadesAsignadasRoutes_1 = __importDefault(require("./routes/actividadesAsignadasRoutes"));
const respuestaRoutes_1 = __importDefault(require("./routes/respuestaRoutes"));
const evaluacionRoutes_1 = __importDefault(require("./routes/evaluacionRoutes"));
const preguntaRoutes_1 = __importDefault(require("./routes/preguntaRoutes"));
const evaluacionAlumnoRoutes_1 = __importDefault(require("./routes/evaluacionAlumnoRoutes"));
const respuestaPreguntaRoutes_1 = __importDefault(require("./routes/respuestaPreguntaRoutes"));
const respuestaEvaluacionRoutes_1 = __importDefault(require("./routes/respuestaEvaluacionRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const consultasRoutes_1 = __importDefault(require("./routes/consultasRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/usuarios', userRoutes_1.default);
        this.app.use('/api/cursos', cursoRoutes_1.default);
        this.app.use('/api/horarios', horarioRoutes_1.default);
        this.app.use('/api/seccion', seccionRoutes_1.default);
        this.app.use('/api/asignaciones', asignacionEstudianteRoutes_1.default);
        this.app.use('/api/mensajes', mensajeRoutes_1.default);
        this.app.use('/api/publicaciones', publicacionRoutes_1.default);
        this.app.use('/api/comentarios', comentarioRoutes_1.default);
        this.app.use('/api/asistencias', asistenciaRoutes_1.default);
        this.app.use('/api/tickets', ticketRoutes_1.default);
        this.app.use('/api/actividades', actividadRoutes_1.default);
        this.app.use('/api/actividadesAsignadas', actividadesAsignadasRoutes_1.default);
        this.app.use('/api/respuestas', respuestaRoutes_1.default);
        this.app.use('/api/evaluaciones', evaluacionRoutes_1.default);
        this.app.use('/api/preguntas', preguntaRoutes_1.default);
        this.app.use('/api/evaluacionesAlumno', evaluacionAlumnoRoutes_1.default);
        this.app.use('/api/respuestasPregunta', respuestaPreguntaRoutes_1.default);
        this.app.use('/api/respuestasEvaluacion', respuestaEvaluacionRoutes_1.default);
        this.app.use('/api/secciones', seccionRoutes_1.default);
        this.app.use('/login', loginRoutes_1.default);
        this.app.use('/api/consultas', consultasRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('SERVER ON PORT ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
