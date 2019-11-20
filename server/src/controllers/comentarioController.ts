import {Request,Response} from 'express';
import pool from '../database';

class ComentarioController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM COMENTARIO', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM COMENTARIO WHERE idComentario = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO COMENTARIO set ?',[req.body]);
        console.log(res.json('{"text":"COMENTARIO creado"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM COMENTARIO WHERE idComentario = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE COMENTARIO SET ? WHERE idComentario = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async getByPublish(req:Request, res:Response){
        await pool.query('SELECT * FROM COMENTARIO WHERE idPublicacion = ?',req.params.idPublicacion, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    
    }

}
export const comentarioController = new ComentarioController();