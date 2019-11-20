import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ActividadAsignada} from '../models/ActividadAsignada';

@Injectable({
  providedIn: 'root'
})
export class ActividadesAsignadasService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/actividadesAsignadas');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/actividadesAsignadas/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/actividadesAsignadas/'+id);
  }
  update(id:string, actividadAsignada:ActividadAsignada){

    return this.http.put(this.API_URI+'/actividadesAsignadas/'+id,actividadAsignada);
  }
  save(actividadAsignada:ActividadAsignada){
    return this.http.post(this.API_URI+'/actividadesAsignadas', actividadAsignada); 
  }

  getActividadesAsignadasByStudent(idUsuario:string){
    return this.http.get(this.API_URI+'/actividadesAsignadas/'+idUsuario);
  }
}
