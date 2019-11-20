import {Request,Response} from 'express';
import pool from '../database';

class LoginController{
    
    public async login(req:Request, res:Response){
           
        await pool.query('SELECT * FROM Usuario WHERE ' + 'nombre_usuario = '+ "\'" + req.body.nombre_usuario+ "\'"+' AND contrasenia = '+ "\'"+ req.body.contrasenia+"\'",
        function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
   

    public parsearNombre(req:Request):any{
        let peticion =JSON.stringify(req.body).split(',');
        let nombreUsuario = peticion[0];
        let nombres = nombreUsuario.split(':');
        let  nombreFinal= nombres[1].replace('"','');
        return nombreFinal;

    }

    public parsearContrasenia(req:Request):any{
        let peticion =JSON.stringify(req.body).split(',');
        let pass = peticion[1];
        let contrasenias = pass.split(':');
        let contraseniaFinal = contrasenias[1].replace('"','');
        return contraseniaFinal;

    }
}
export const loginController = new LoginController();