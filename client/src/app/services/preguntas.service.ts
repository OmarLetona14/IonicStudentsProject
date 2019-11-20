import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Pregunta} from '../models/Pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/preguntas');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/preguntas/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/preguntas/'+id);
  }
  update(id:string, pregunta:Pregunta){

    return this.http.put(this.API_URI+'/preguntas/'+id,pregunta);
  }
  save(pregunta:Pregunta){
    return this.http.post(this.API_URI+'/preguntas', pregunta); 
  }

}
