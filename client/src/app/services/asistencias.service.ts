import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Asistencia} from '../models/Asistencia';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/asistencias');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/asistencias/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/asistencias/'+id);
  }
  update(id:string, asistencia:Asistencia){

    return this.http.put(this.API_URI+'/asistencias/'+id,asistencia);
  }
  save(asistencia:Asistencia){
    return this.http.post(this.API_URI+'/asistencias', asistencia); 
  }
}
