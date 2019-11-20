import {Request,Response} from 'express';

import pool from '../database';

class SeccionController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM SECCION', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM SECCION WHERE idSeccion = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO SECCION set ?',[req.body]);
        console.log(res.json('{"text":"SECCION creada"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM SECCION WHERE idSeccion = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE SECCION SET ? WHERE idSeccion = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async getOneWithHorario(req:Request, res:Response){
        await pool.query('SELECT * FROM HORARIO WHERE IDHORARIO = ?',req.params.id,function(err, result, fields){
            if (err) throw err;
            res.json(result);
        } );
    }

}
export const seccionController = new SeccionController();