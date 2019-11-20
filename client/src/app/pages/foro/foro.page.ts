import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.page.html',
  styleUrls: ['./foro.page.scss'],
})
export class ForoPage implements OnInit {

  foros:any=[];
  usuario:Usuario;
  auxiliar:Boolean;

  constructor(private publicacionService:PublicacionesService, private router:Router) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogeado'));
    if(this.usuario.rol=="Auxiliar"){
      this.auxiliar=true;
    }else{
      this.auxiliar=false;
    }
    this.getAllPublicaciones();
  }

  getAllPublicaciones(){
    this.publicacionService.getAll().subscribe(
      res=>{
        this.foros=res;
      },
      err=>{

      }
    );
  }

  add(){
    this.router.navigate(['/agregar-foro']);
  }

  verComentarios(idPublicacion:string){
    console.log(idPublicacion);
    localStorage.setItem('idPublicacion', idPublicacion);

    this.router.navigate(['/comentarios-foro']);
  }

}
