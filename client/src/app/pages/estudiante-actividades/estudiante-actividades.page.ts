import { Component, OnInit } from '@angular/core';
import { ActividadesAsignadasService } from 'src/app/services/actividades-asignadas.service';
import { ActividadesService } from 'src/app/services/actividades.service';
import { Usuario } from 'src/app/models/Usuario';
import { Actividad } from 'src/app/models/Actividad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiante-actividades',
  templateUrl: './estudiante-actividades.page.html',
  styleUrls: ['./estudiante-actividades.page.scss'],
})
export class EstudianteActividadesPage implements OnInit {
  
  usuario:Usuario;
  actividadesAsignadas:any=[];
  actividades:any=[];
  constructor(private actividadesAsignadasService:ActividadesAsignadasService, private actividadesService:ActividadesService, private router:Router) { }

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

  agregarEntrega(idActividad:string){
    localStorage.setItem('idActividad', idActividad);
    this.router.navigate(['/entrega']);
  }

}
