import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from 'src/app/models/UsuarioLogin';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarioLogin: UsuarioLogin={
    nombre_usuario:'',
    contrasenia:''
  };

  usuarioLogeado:Usuario;

  constructor(private service:LoginService, private router:Router) { }

  ngOnInit() {
  }

  login(){
    console.log('works');
    console.log(this.usuarioLogin);
    this.service.requestLogin(this.usuarioLogin).subscribe(
      res=>{
        if(res.toString()!= ''){
          this.usuarioLogeado = res[0];
          console.log(this.usuarioLogeado.rol);
          if(this.usuarioLogeado.rol=="Estudiante"){
            this.router.navigate(['/inicio-estudiante']);
            localStorage.setItem('usuarioLogeado', JSON.stringify(this.usuarioLogeado));
          }else if(this.usuarioLogeado.rol=="Auxiliar"){
            this.router.navigate(['/inicio-auxiliar']);
            localStorage.setItem('usuarioLogeado', JSON.stringify(this.usuarioLogeado));
          }else{
            alert('Ocurrio un error al intentar logearse');
          }
        }else{
          alert('Usuario invalido');
        }
      },
      err=>{
        console.log(err);
      }
    );

  }

}
