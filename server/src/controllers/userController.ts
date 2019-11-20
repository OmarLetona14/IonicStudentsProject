import {Request,Response} from 'express';

import pool from '../database';


class UserController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM USUARIO', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getByEmail(req:Request, res:Response){
        await pool.query('SELECT * FROM USUARIO WHERE email = ?', req.params.correo,function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM USUARIO WHERE idUsuario = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO Usuario set ?',[req.body]);
        console.log(res.json('{"text":"Usuario creado"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM USUARIO WHERE idUsuario = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE USUARIO SET ? WHERE idUsuario = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

}
export const userController = new UserController();