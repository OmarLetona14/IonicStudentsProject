import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Usuario} from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/usuarios');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/usuarios/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/usuarios/'+id);
  }
  update(id:string, usuario:Usuario){

    return this.http.put(this.API_URI+'/usuarios/'+id,usuario);
  }
  save(usuario:Usuario){
    return this.http.post(this.API_URI+'/usuarios', usuario); 
  }

  getByEmail(correo:string){
    return this.http.get(this.API_URI+'/usuarios/recuperacion/'+correo);
  }

}
