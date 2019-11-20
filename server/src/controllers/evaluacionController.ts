import {Request,Response} from 'express';
import pool from '../database';

class EvaluacionController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM EVALUACION', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM EVALUACION WHERE idEvaluacion = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO EVALUACION set ?',[req.body]);
        console.log(res.json('{"text":"EVALUACION creada"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM EVALUACION WHERE idEvaluacion = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE EVALUACION SET ? WHERE idEvaluacion = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

}
export const evaluacionController = new EvaluacionController();