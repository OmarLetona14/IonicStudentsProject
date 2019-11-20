import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Curso} from '../models/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/cursos');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/cursos/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/cursos/'+id);
  }
  update(id:string, curso:Curso){

    return this.http.put(this.API_URI+'/cursos/'+id,curso);
  }
  save(curso:Curso){
    return this.http.post(this.API_URI+'/cursos', curso); 
  }

}
