import {Request,Response} from 'express';
import pool from '../database';

class RespuestaController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM RESPUESTA', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM RESPUESTA WHERE idRespuesta = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO RESPUESTA set ?',[req.body]);
        console.log(res.json('{"text":"RESPUESTA creada"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM RESPUESTA WHERE idRespuesta = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE RESPUESTA SET ? WHERE idRespuesta = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

}
export const respuestaController = new RespuestaController();