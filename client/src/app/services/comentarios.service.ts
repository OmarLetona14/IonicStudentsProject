import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Comentario} from '../models/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/comentarios');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/comentarios/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/comentarios/'+id);
  }
  update(id:string, comentario:Comentario){

    return this.http.put(this.API_URI+'/comentarios/'+id,comentario);
  }
  save(comentario:Comentario){
    return this.http.post(this.API_URI+'/comentarios', comentario); 
  }


  getByPublish(idPublicacion:string){
    return this.http.get(this.API_URI+'/comentarios/'+idPublicacion);
  }
}
