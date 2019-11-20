import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { Usuario } from 'src/app/models/Usuario';
import { Mensaje } from 'src/app/models/Mensaje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-mensaje',
  templateUrl: './agregar-mensaje.page.html',
  styleUrls: ['./agregar-mensaje.page.scss'],
})
export class AgregarMensajePage implements OnInit {

  usuario:Usuario;
  asunto:string;
  cuerpo:string;
  idDestinatario:number;
  mensaje:Mensaje={
    idMensaje:0,
    asunto:'',
    cuerpo:'',
    idRemitente:'',
    idDestinatario:''
  };
  usuarios:any=[];

  constructor(private usuariosSevice:UsuariosService, private mensajesService:MensajesService, private router:Router) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogeado'));
    this.getAllUsers();
  }

  getAllUsers(){
    this.usuariosSevice.getAll().subscribe(
      res=>{
        this.usuarios=res;
      },
      err=>{

      }
      );
      
  }

  agregarMensaje(){
    delete this.mensaje.idMensaje;
    this.mensaje.asunto = this.asunto;
    this.mensaje.cuerpo = this.cuerpo;
    this.mensaje.idDestinatario = this.idDestinatario.toString();
    this.mensaje.idRemitente = this.usuario.idUsuario.toString();
    this.mensajesService.save(this.mensaje).subscribe(
      res=>{
        this.router.navigate(['/mensajes']);
      }, err=>{

      }
    );

  }

}
