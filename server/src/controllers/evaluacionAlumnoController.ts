import {Request,Response} from 'express';
import pool from '../database';

class EvaluacionAlumnoController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM EVALUACION_ALUMNO', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM EVALUACION_ALUMNO WHERE idEvaluacion_alumno = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO EVALUACION_ALUMNO set ?',[req.body]);
        console.log(res.json('{"text":"EVALUACION_ALUMNO creada"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM EVALUACION_ALUMNO WHERE idEvaluacion_alumno = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE EVALUACION_ALUMNO SET ? WHERE idEvaluacion_alumno = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

}
export const evaluacionAlumnoController = new EvaluacionAlumnoController();