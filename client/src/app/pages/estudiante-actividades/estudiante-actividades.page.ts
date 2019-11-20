import { Component, OnInit } from '@angular/core';
import { ActividadesAsignadasService } from 'src/app/services/actividades-asignadas.service';
import { ActividadesService } from 'src/app/services/actividades.service';
import { Usuario } from 'src/app/models/Usuario';
import { Actividad } from 'src/app/models/Actividad';

@Component({
  selector: 'app-estudiante-actividades',
  templateUrl: './estudiante-actividades.page.html',
  styleUrls: ['./estudiante-actividades.page.scss'],
})
export class EstudianteActividadesPage implements OnInit {
  
  usuario:Usuario;
  actividadesAsignadas:any=[];
  actividades:any=[];
  constructor(private actividadesAsignadasService:ActividadesAsignadasService, private actividadesService:ActividadesService) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogeado'));
    this.getAllActividades();
    
  }

  getAllActividades(){
    this.actividadesAsignadasService.getActividadesAsignadasByStudent(this.usuario.idUsuario.toString()).subscribe(
      res=>{
        this.actividadesAsignadas=res;
        this.getActividades();
      },
      err=>{

      }
    );

  }

  getActividades(){
    for (let index = 0; index < this.actividadesAsignadas.length; index++) {
      const element = this.actividadesAsignadas[index];
      this.actividadesService.getOne(element.idActividad).subscribe(
        res=>{
          let actividad:Actividad = res;
          this.actividades[this.actividades.length] = actividad;
          console.log(actividad);
          console.log(this.actividades);
        },
        err=>{

        }
      );
      
    }

  }

}
