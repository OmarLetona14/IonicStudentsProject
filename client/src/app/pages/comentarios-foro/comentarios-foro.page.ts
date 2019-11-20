import { Component, OnInit, Input } from '@angular/core';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comentarios-foro',
  templateUrl: './comentarios-foro.page.html',
  styleUrls: ['./comentarios-foro.page.scss'],
})
export class ComentariosForoPage implements OnInit {

  constructor(private comentariosService:ComentariosService,private router:Router) { }

  idPublicacion:string;
  comentarios:any=[];
  ngOnInit() {
    this.idPublicacion = localStorage.getItem('idPublicacion');
    this.getComentariosByPublish();
  }

  getComentariosByPublish(){
    this.comentariosService.getByPublish(this.idPublicacion).subscribe(
      res=>{  
        this.comentarios=res;
      },
      err=>{

      }
    );

  }

  add(){

    this.router.navigate(['/agregar-comentario']);
  }

}
