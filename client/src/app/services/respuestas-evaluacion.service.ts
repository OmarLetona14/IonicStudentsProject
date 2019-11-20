import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {RespuestaEvaluacion} from '../models/RespuestaEvaluacion';

@Injectable({
  providedIn: 'root'
})
export class RespuestasEvaluacionService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/respuestasEvaluacion');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/respuestasEvaluacion/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/respuestasEvaluacion/'+id);
  }
  update(id:string, respuestaEvaluacion:RespuestaEvaluacion){

    return this.http.put(this.API_URI+'/respuestasEvaluacion/'+id,respuestaEvaluacion);
  }
  save(respuestaEvaluacion:RespuestaEvaluacion){
    return this.http.post(this.API_URI+'/respuestasEvaluacion', respuestaEvaluacion); 
  }

}
