import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Mensaje} from '../models/Mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/mensajes');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/mensajes/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/mensajes/'+id);
  }
  update(id:string, mensaje:Mensaje){

    return this.http.put(this.API_URI+'/mensajes/'+id,mensaje);
  }
  save(mensaje:Mensaje){
    return this.http.post(this.API_URI+'/mensajes', mensaje); 
  }

  getMensajesByUser(idUsuario:string){
    return this.http.get(this.API_URI+'/mensajes/'+idUsuario);
  }

}
