import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { SeccionesService } from 'src/app/services/secciones.service';
import { Asignacion } from 'src/app/models/Asignacion';
import { Usuario } from 'src/app/models/Usuario';
import { Seccion } from 'src/app/models/Seccion';
import { AsignacionesService } from 'src/app/services/asignaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.page.html',
  styleUrls: ['./asignacion.page.scss'],
})
export class AsignacionPage implements OnInit {

  usuario:Usuario;
  secciones:any=[];
  codCurso:string;
  idSeccion:string;
  nota:number;
  fecha_actual:Date = new Date();
  asignacion:Asignacion={
    idAsignacion_estudiante:0,
    idSeccion:0,
    idUsuario:0,
    fecha_desasignacion:'',
    nota:0
  };
  

  constructor(private seccionesService:SeccionesService, private asignacionService:AsignacionesService, private router:Router) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogeado'));
    this.getAllCursos();
  }

  getAllCursos(){
    this.seccionesService.getAll().subscribe(
      res=>{
        this.secciones= res;
      },
      err=>{
        console.log(err);
      }
    );
  }

  nuevaAsignacion(){
    delete this.asignacion.idAsignacion_estudiante;
    this.asignacion.fecha_desasignacion = this.formatDate(this.fecha_actual);
    console.log(this.formatDate(this.fecha_actual));
    this.asignacion.nota=0;
    this.asignacion.idUsuario = this.usuario.idUsuario;
    this.asignacion.idSeccion = Number.parseInt(this.idSeccion);
    console.log(this.asignacion);
    this.asignacionService.save(this.asignacion).subscribe(
      res=>{
        alert('Asignacion realizada correctamente');
        this.router.navigate(['/inicio-estudiante']);
      },
      err=>{
        alert('Ocurrio un error al intentar asignarse');
      }
    );
  }

  formatDate(date:Date):any{
    let fecha_formateada = date.getFullYear()+ '-' + date.getMonth()+ '-'+date.getDay();
    return fecha_formateada;
  }

}
