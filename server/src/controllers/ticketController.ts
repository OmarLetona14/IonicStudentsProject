import {Request,Response} from 'express';
import pool from '../database';

class TicketController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM TICKET', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM TICKET WHERE idTicket = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO TICKET set ?',[req.body]);
        console.log(res.json('{"text":"TICKET creadO"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM TICKET WHERE idTicket = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE TICKET SET ? WHERE idTicket = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async getByStudent(req:Request, res:Response){
        await pool.query('SELECT * FROM TICKET WHERE idUsuario = ?',req.params.idEstudiante, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

}
export const ticketsController = new TicketController();