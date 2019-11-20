import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Publicacion} from '../models/Publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/publicaciones');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/publicaciones/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/publicaciones/'+id);
  }
  update(id:string, publicacion:Publicacion){

    return this.http.put(this.API_URI+'/publicaciones/'+id,publicacion);
  }
  save(publicacion:Publicacion){
    return this.http.post(this.API_URI+'/publicaciones', publicacion); 
  }

}

