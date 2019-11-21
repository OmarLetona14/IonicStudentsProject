import {Request,Response} from 'express';
import pool from '../database';

class ActividadAsignadaController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM ACTIVIDADES_ASIGNADAS', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM ACTIVIDADES_ASIGNADAS WHERE idActividades_asignadas = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO ACTIVIDADES_ASIGNADAS set ?',[req.body]);
        console.log(res.json('{"text":"ACTIVIDADES_ASIGNADAS creada"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM ACTIVIDADES_ASIGNADAS WHERE idActividades_asignadas = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE ACTIVIDADES_ASIGNADAS SET ? WHERE idActividades_asignadas = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async getActividadesAsignadasByStudent(req:Request, res:Response){
        let idUser = req.params.idUsuario;
        let consulta = "SELECT * FROM ACTIVIDADES_ASIGNADAS "+
        " INNER JOIN actividad ON actividad.idActividad = actividades_asignadas.idActividad"+ 
        " INNER JOIN seccion ON seccion.idSeccion = actividad.idSeccion"+
        " INNER JOIN curso ON curso.codCurso = seccion.codCurso "+
        " WHERE ACTIVIDADES_ASIGNADAS.idUsuario = "+idUser; 
        await pool.query(consulta, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

}
export const actividadAsignadaController = new ActividadAsignadaController();