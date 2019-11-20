import { Component, OnInit } from '@angular/core';
import { AsignacionesService } from 'src/app/services/asignaciones.service';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-cursos-asignados',
  templateUrl: './cursos-asignados.page.html',
  styleUrls: ['./cursos-asignados.page.scss'],
})
export class CursosAsignadosPage implements OnInit {

  cursosAsignados:any=[];

  usuario:Usuario;

  constructor(private asignacionesService:AsignacionesService) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogeado'));
    this.getAsignaciones();
  }

  getAsignaciones(){
    console.log(this.usuario.idUsuario);
    this.asignacionesService.getByStudent(this.usuario.idUsuario.toString()).subscribe(
      res=>{
        
        this.cursosAsignados=res;
        console.log(this.cursosAsignados);
      },
      err=>{

      }
    );

  }
}
