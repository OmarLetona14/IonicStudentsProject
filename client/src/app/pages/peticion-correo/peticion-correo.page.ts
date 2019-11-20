import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/Usuario';
@Component({
  selector: 'app-peticion-correo',
  templateUrl: './peticion-correo.page.html',
  styleUrls: ['./peticion-correo.page.scss'],
})
export class PeticionCorreoPage implements OnInit {

  correo:string;
  usuario:Usuario;

  constructor(private router:Router,private usersService:UsuariosService) { }

  ngOnInit() {
  }

  mandarCorreo(){
    let usuario = this.usersService.getByEmail(this.correo).subscribe(
      res=>{
        this.usuario = res[0];
      },
      err=>{

      }
    );
    if(!(typeof this.usuario =="undefined")){
      
       
    }else{
      alert('No existe usuario asociado a este correo');
    }
    
  }

  generar(longitud)
  {
    var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
    var contraseña = "";
    for (let i=0; i<longitud; i++) contraseña += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
    return contraseña;
  }

}
