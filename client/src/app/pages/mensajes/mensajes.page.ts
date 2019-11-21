import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/services/mensajes.service';
import { Usuario } from 'src/app/models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {

  usuario:Usuario;
  mensajes:any=[];
  auxiliar:boolean;

  constructor(private mensajesService:MensajesService, private router:Router) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogeado'));
    if(this.usuario.rol=='Auxiliar'){this.auxiliar=true;}else{this.auxiliar=false}
    this.getAllMensajes();
  }

  getAllMensajes(){
    this.mensajesService.getMensajesByUser(this.usuario.idUsuario.toString()).subscribe(
      res=>{
        this.mensajes= res;
      },
      err=>{

      }
    );

  }

  add(){
    this.router.navigate(['/agregar-mensaje']);
  }

}
