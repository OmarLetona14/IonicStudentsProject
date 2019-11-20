import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Respuesta} from '../models/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class RespuestasService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/respuestas');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/respuestas/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/respuestas/'+id);
  }
  update(id:string, respuesta:Respuesta){

    return this.http.put(this.API_URI+'/respuestas/'+id,respuesta);
  }
  save(respuesta:Respuesta){
    return this.http.post(this.API_URI+'/respuestas', respuesta); 
  }
}
