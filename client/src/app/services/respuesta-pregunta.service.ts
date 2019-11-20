import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {RespuestaPregunta} from '../models/RespuestaPregunta';

@Injectable({
  providedIn: 'root'
})
export class RespuestaPreguntaService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/respuestasPregunta');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/respuestasPregunta/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/respuestasPregunta/'+id);
  }
  update(id:string, respuestaPregunta:RespuestaPregunta){

    return this.http.put(this.API_URI+'/respuestasPregunta/'+id,respuestaPregunta);
  }
  save(respuestaPregunta:RespuestaPregunta){
    return this.http.post(this.API_URI+'/respuestasPregunta', respuestaPregunta); 
  }

}
