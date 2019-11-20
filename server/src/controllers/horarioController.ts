import {Request,Response} from 'express';
import pool from '../database';

class HorarioController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM HORARIO', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM HORARIO WHERE idHorario = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO HORARIO set ?',[req.body]);
        console.log(res.json('{"text":"HORARIO creado"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM HORARIO WHERE idHorario = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE HORARIO SET ? WHERE idHorario = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

}
export const horarioController = new HorarioController();