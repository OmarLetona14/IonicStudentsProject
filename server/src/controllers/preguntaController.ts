import {Request,Response} from 'express';
import pool from '../database';

class PreguntaController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM PREGUNTA', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM PREGUNTA WHERE idPregunta = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO PREGUNTA set ?',[req.body]);
        console.log(res.json('{"text":"PREGUNTA creada"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM PREGUNTA WHERE idPregunta = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE PREGUNTA SET ? WHERE idPregunta = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

}
export const preguntaController = new PreguntaController();