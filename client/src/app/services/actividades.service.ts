import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Actividad} from '../models/Actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/actividades');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/actividades/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/actividades/'+id);
  }
  update(id:string, actividad:Actividad){

    return this.http.put(this.API_URI+'/actividades/'+id,actividad);
  }
  save(actividad:Actividad){
    return this.http.post(this.API_URI+'/actividades', actividad); 
  }
}