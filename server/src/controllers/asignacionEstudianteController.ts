import {Request,Response} from 'express';
import pool from '../database';

class AsignacionEstudianteController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM Asignacion_estudiante', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM Asignacion_estudiante WHERE idAsignacion_estudiante = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO Asignacion_estudiante set ?',[req.body]);
        console.log(res.json('{"text":"Asignacion_estudiante creado"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM Asignacion_estudiante WHERE idAsignacion_estudiante = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE Asignacion_estudiante SET ? WHERE idAsignacion_estudiante = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getByEstudiante(req:Request, res:Response){
        let idUser =req.params.idUsuario;
        let consulta ="SELECT * FROM Asignacion_estudiante"+
        " INNER JOIN seccion ON seccion.idSeccion = asignacion_estudiante.idSeccion "+
        " INNER JOIN curso ON curso.codCurso = seccion.codCurso "+
        " INNER JOIN horario ON seccion.idHorario = horario.idHorario"+
        " WHERE asignacion_estudiante.idUsuario = "+idUser;
        console.log(consulta);
        await pool.query(consulta, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
}
export const asignacionEstudianteController = new AsignacionEstudianteController();