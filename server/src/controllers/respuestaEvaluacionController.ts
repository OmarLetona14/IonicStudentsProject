import {Request,Response} from 'express';
import pool from '../database';

class RespuestaEvaluacionController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM RESPUESTA_EVALUACION', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM RESPUESTA_EVALUACION WHERE idRespuesta_evaluacion = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO RESPUESTA_EVALUACION set ?',[req.body]);
        console.log(res.json('{"text":"RESPUESTA_EVALUACION creada"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM RESPUESTA_EVALUACION WHERE idRespuesta_evaluacion = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE RESPUESTA_EVALUACION SET ? WHERE idRespuesta_evaluacion = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

}
export const respuestaEvaluacionController = new RespuestaEvaluacionController();