import {Request,Response} from 'express';
import pool from '../database';

class CursoController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM CURSO', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM CURSO WHERE codCurso = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO CURSO set ?',[req.body]);
        console.log(res.json('{"text":"CURSO creado"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM CURSO WHERE codCurso = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE CURSO SET ? WHERE codCurso = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }


}
export const cursoController = new CursoController();