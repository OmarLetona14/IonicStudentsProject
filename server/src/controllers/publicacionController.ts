import {Request,Response} from 'express';
import pool from '../database';

class PublicacionController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM PUBLICACION', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM PUBLICACION WHERE idPublicacion = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO PUBLICACION set ?',[req.body]);
        console.log(res.json('{"text":"PUBLICACION creada"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM PUBLICACION WHERE idPublicacion = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE PUBLICACION SET ? WHERE idPublicacion = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }
}
export const publicacionController = new PublicacionController();