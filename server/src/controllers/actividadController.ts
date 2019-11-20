import {Request,Response} from 'express';

import pool from '../database';

class ActividadController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM ACTIVIDAD', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM ACTIVIDAD WHERE idActividad = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO ACTIVIDAD set ?',[req.body]);
        console.log(res.json('{"text":"ACTIVIDAD creada"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM ACTIVIDAD WHERE idActividad = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE ACTIVIDAD SET ? WHERE idActividad = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

}
export const actividadController = new ActividadController();