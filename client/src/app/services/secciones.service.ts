import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Seccion} from '../models/Seccion';

@Injectable({
  providedIn: 'root'
})
export class SeccionesService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/secciones');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/secciones/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/secciones/'+id);
  }
  update(id:string, seccion:Seccion){

    return this.http.put(this.API_URI+'/secciones/'+id,seccion);
  }
  save(seccion:Seccion){
    return this.http.post(this.API_URI+'/secciones', seccion); 
  }

}
