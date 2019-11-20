import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { Comentario } from 'src/app/models/Comentario';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-comentario',
  templateUrl: './agregar-comentario.page.html',
  styleUrls: ['./agregar-comentario.page.scss'],
})
export class AgregarComentarioPage implements OnInit {

  usuario:Usuario;
  usuarioPublicacion:Usuario;
  idPublicacion:string;
  comentario:Comentario={
    idComentario:0,
    idPublicacion:0,
    idUsuario:0,
    contenido:''
  };
  contenido:string = '';

  constructor(private comentariosService:ComentariosService, private router:Router) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogeado'));
    this.idPublicacion = localStorage.getItem('idPublicacion');
    console.log(this.idPublicacion);
    console.log(this.usuario.idUsuario);
  }

  agregarComentario(){
    delete this.comentario.idComentario;
    this.comentario.idPublicacion = Number.parseInt(this.idPublicacion);
    this.comentario.idUsuario = this.usuario.idUsuario;
    this.comentario.contenido = this.contenido;
    this.comentariosService.save(this.comentario).subscribe(
      res=>{
        this.router.navigate(['/comentarios-foro']);
      },
      err=>{

      }
    );

  }

}
