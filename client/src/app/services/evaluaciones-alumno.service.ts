import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {EvaluacionAlumno} from '../models/EvaluacionAlumno';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionesAlumnoService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/evaluacionesAlumno');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/evaluacionesAlumno/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/evaluacionesAlumno/'+id);
  }
  update(id:string, evaluacionAlumno:EvaluacionAlumno){

    return this.http.put(this.API_URI+'/evaluacionesAlumno/'+id,evaluacionAlumno);
  }
  save(evaluacionAlumno:EvaluacionAlumno){
    return this.http.post(this.API_URI+'/evaluacionesAlumno', evaluacionAlumno); 
  }

}
