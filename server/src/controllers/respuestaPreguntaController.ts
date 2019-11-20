import {Request,Response} from 'express';
import pool from '../database';

class RespuestaPreguntaController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM RESPUESTA_PREGUNTA', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM RESPUESTA_PREGUNTA WHERE idRespuesta_pregunta = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO RESPUESTA_PREGUNTA set ?',[req.body]);
        console.log(res.json('{"text":"RESPUESTA_PREGUNTA creada"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM RESPUESTA_PREGUNTA WHERE idRespuesta_pregunta = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE RESPUESTA_PREGUNTA SET ? WHERE idRespuesta_pregunta = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

}
export const respuestaPreguntaController = new RespuestaPreguntaController();