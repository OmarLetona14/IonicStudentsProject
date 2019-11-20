import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Asignacion} from '../models/Asignacion';

@Injectable({
  providedIn: 'root'
})
export class AsignacionesService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/asignaciones');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/asignaciones/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/asignaciones/'+id);
  }
  update(id:string, asignacion:Asignacion){

    return this.http.put(this.API_URI+'/asignaciones/'+id,asignacion);
  }
  save(asignacion:Asignacion){
    return this.http.post(this.API_URI+'/asignaciones', asignacion); 
  }

  getByStudent(idUsuario:string){
    return this.http.get(this.API_URI+'/asignaciones/'+idUsuario);
  }

}
