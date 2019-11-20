import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario:Usuario={

    idUsuario:0,
    nombre_usuario:'',
    carnet:'',
    email:'',
    contrasenia:'',
    rol:'Estudiante'
  }

  constructor(private UsersService:UsuariosService, private router:Router) { }

  ngOnInit() {
  }

  registrar(){
    this.UsersService.save(this.usuario).subscribe(
      res=>{
        this.router.navigate(['/login']);
      }, err=>{
        console.log(err);
      }
    );

  }

  nodemailer

}
