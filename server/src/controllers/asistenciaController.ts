import {Request,Response} from 'express';

import pool from '../database';

class AsistenciaController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM ASISTENCIA', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM ASISTENCIA WHERE idAsistencia = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO ASISTENCIA set ?',[req.body]);
        console.log(res.json('{"text":"ASISTENCIA creada"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM ASISTENCIA WHERE idAsistencia = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE ASISTENCIA SET ? WHERE idAsistencia = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

}
export const asistenciaController = new AsistenciaController();