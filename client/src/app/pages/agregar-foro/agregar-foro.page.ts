import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { Publicacion } from 'src/app/models/Publicacion';
import { SeccionesService } from 'src/app/services/secciones.service';
import { Usuario } from 'src/app/models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-foro',
  templateUrl: './agregar-foro.page.html',
  styleUrls: ['./agregar-foro.page.scss'],
})
export class AgregarForoPage implements OnInit {

  fecha_actual:Date = new Date();
  secciones:any=[];
  usuario:Usuario;
  titulo:string;
  contenido:string;
  idSeccion:string;
  publicacion:Publicacion={
    idPublicacion:0,
    titulo:'',
    fecha_limite:'',
    contenido:'',
    fecha_publicacion:'',
    idUsuario:0,
    idSeccion:0
  };
  constructor(private publicacionesService:PublicacionesService, private seccionesService:SeccionesService, private router:Router) { }

  ngOnInit() {
    this.getSecciones();
    console.log(this.publicacion.fecha_publicacion);
  }

  getSecciones(){
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogeado'));
    this.seccionesService.getAll().subscribe(
      res=>{
        this.secciones=res;
      }, err=>{

      }
    );
  }

  agregarPublicacion(){
    delete this.publicacion.idPublicacion;
    this.publicacion.titulo = this.titulo;
    this.publicacion.contenido=this.contenido;
    this.publicacion.fecha_publicacion=this.formatDate(this.fecha_actual);
    this.publicacion.idUsuario= this.usuario.idUsuario;
    this.publicacion.idSeccion = Number.parseInt(this.idSeccion);
    this.publicacion.fecha_limite = this.formatDate(this.fecha_actual);
    this.publicacionesService.save(this.publicacion).subscribe(
        res=>{
          alert('Publicacion agregada correctamente');
          this.router.navigate(['/foro']);
        },
        err=>{
          alert('Ocurrio un problema al agregar la publicacion');
        }
      );   
  }

  formatDate(date:Date):any{
    let fecha_formateada = date.getFullYear()+ '-' + date.getMonth()+ '-'+date.getDay();
    return fecha_formateada;
  }
}
