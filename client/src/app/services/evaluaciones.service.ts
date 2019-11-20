import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Evaluacion} from '../models/Evaluacion';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionesService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/evaluaciones');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/evaluaciones/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/evaluaciones/'+id);
  }
  update(id:string, evaluacion:Evaluacion){

    return this.http.put(this.API_URI+'/evaluaciones/'+id,evaluacion);
  }
  save(evaluacion:Evaluacion){
    return this.http.post(this.API_URI+'/evaluaciones', evaluacion); 
  }

}
