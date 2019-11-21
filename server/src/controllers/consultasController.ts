import {Request,Response} from 'express';

import pool from '../database';

class ConsultasController{

    public async asignaciones(req:Request, res:Response){
        let idSeccion = req.body.idSeccion;
        let consulta= 'SELECT * FROM USUARIO INNER JOIN asignacion_estudiante ON USUARIO.idUsuario = asignacion_estudiante.idUsuario '+
        'INNER JOIN seccion ON asignacion_estudiante.idSeccion = seccion.idSeccion'+
        ' INNER JOIN horario ON seccion.idHorario = horario.idHorario'+
        'INNER JOIN curso ON curso.codCurso = seccion.codCurso'+
        ' WHERE seccion.idSeccion = '+idSeccion;
        await pool.query(consulta, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getAllAsignaciones(req:Request, res:Response){
        let consulta= 'SELECT * FROM USUARIO INNER JOIN asignacion_estudiante ON USUARIO.idUsuario = asignacion_estudiante.idUsuario '+
        'INNER JOIN seccion ON asignacion_estudiante.idSeccion = seccion.idSeccion'+
        ' INNER JOIN horario ON seccion.idHorario = horario.idHorario'+
        ' INNER JOIN curso ON curso.codCurso = seccion.codCurso';
        await pool.query(consulta, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async ticketsByContent(req:Request, res:Response){
        let contenido = req.body.contenido;
        let consulta="SELECT * FROM TICKET WHERE contenido like "+"\'%"+contenido +"%\'";
        await pool.query(consulta, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async ticketsByState(req:Request, res:Response){
        let estado = req.body.estado;
        let consulta="SELECT * FROM TICKET WHERE estado = "+"\'"+estado+"\'";
        await pool.query(consulta, function(err, result, fields) {
            if (err) throw err;
         res.json(result);
        });
    }

    public async evaluacionesByDate(req:Request, res:Response){
        let fecha_1 = req.body.fecha_1;
        let fecha_2 = req.body.fecha_2;
        let consulta="SELECT * FROM EVALUACION WHERE fecha_creacion between "+"\'"+ fecha_1+ "\'"+" AND "+"\'"+ fecha_2+ "\'";
        await pool.query(consulta, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    
    public async publicaciones(req:Request, res:Response){
        let consulta = "SELECT * FROM PUBLICACION "+
        'INNER JOIN usuario ON usuario.idUsuario = publicacion.idUsuario';
        await pool.query(consulta, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async asistencia(req:Request, res:Response){
        await pool.query('SELECT * FROM ASISTENCIA WHERE idAsistencia = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public getPrueba(req:Request, res:Response)
    {
        res.json('{text:mensaje}');
    }
}
export const consultasController = new ConsultasController();