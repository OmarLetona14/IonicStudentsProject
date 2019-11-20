import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import userRoutes from './routes/userRoutes';
import cursoRoutes from './routes/cursoRoutes';
import horarioRoutes from './routes/horarioRoutes';
import seccionRoutes from './routes/seccionRoutes';
import asignacionEstudianteRoutes from './routes/asignacionEstudianteRoutes';
import mensajeRoutes from './routes/mensajeRoutes';
import publicacionRoutes from './routes/publicacionRoutes';
import comentarioRoutes from './routes/comentarioRoutes';
import asistenciaRoutes from './routes/asistenciaRoutes';
import ticketRoutes from './routes/ticketRoutes';
import actividadRoutes from './routes/actividadRoutes';
import actividadesAsignadasRoutes from './routes/actividadesAsignadasRoutes';
import respuestaRoutes from './routes/respuestaRoutes';
import evaluacionRoutes from './routes/evaluacionRoutes';
import preguntaRoutes from './routes/preguntaRoutes';
import evaluacionAlumnoRoutes from './routes/evaluacionAlumnoRoutes';
import respuestaPreguntaRoutes from './routes/respuestaPreguntaRoutes';
import respuestaEvaluacionRoutes from './routes/respuestaEvaluacionRoutes';
import loginRoutes from './routes/loginRoutes';

class Server{

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes():void{
        this.app.use(indexRoutes);
        this.app.use('/api/usuarios',userRoutes);
        this.app.use('/api/cursos',cursoRoutes);
        this.app.use('/api/horarios',horarioRoutes);
        this.app.use('/api/seccion',seccionRoutes);
        this.app.use('/api/asignaciones',asignacionEstudianteRoutes);
        this.app.use('/api/mensajes',mensajeRoutes);
        this.app.use('/api/publicaciones',publicacionRoutes);
        this.app.use('/api/comentarios',comentarioRoutes);
        this.app.use('/api/asistencias',asistenciaRoutes);
        this.app.use('/api/tickets',ticketRoutes);
        this.app.use('/api/actividades',actividadRoutes);
        this.app.use('/api/actividadesAsignadas',actividadesAsignadasRoutes);
        this.app.use('/api/respuestas',respuestaRoutes);
        this.app.use('/api/evaluaciones',evaluacionRoutes);
        this.app.use('/api/preguntas',preguntaRoutes);
        this.app.use('/api/evaluacionesAlumno',evaluacionAlumnoRoutes);
        this.app.use('/api/respuestasPregunta',respuestaPreguntaRoutes);
        this.app.use('/api/respuestasEvaluacion',respuestaEvaluacionRoutes);
        this.app.use('/api/secciones',seccionRoutes);
        this.app.use('/login',loginRoutes);
    }

    start():void{

        this.app.listen(this.app.get('port'), ()=>{

            console.log('SERVER ON PORT ', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();