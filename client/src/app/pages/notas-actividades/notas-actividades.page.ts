import { Component, OnInit } from '@angular/core';
import { ActividadesAsignadasService } from 'src/app/services/actividades-asignadas.service';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-notas-actividades',
  templateUrl: './notas-actividades.page.html',
  styleUrls: ['./notas-actividades.page.scss'],
})
export class NotasActividadesPage implements OnInit {

  actividades:any=[];
  usuario:Usuario;

  constructor(private actividadesAsignadasService:ActividadesAsignadasService) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogeado'));
    this.getAllActividades();
  }


  getAllActividades(){
    this.actividadesAsignadasService.getActividadesAsignadasByStudent(this.usuario.idUsuario.toString()).subscribe(
      res=>{
        this.actividades=res;
      },
      err=>{

      }
    );
    
  }
}
