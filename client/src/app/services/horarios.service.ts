import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Horario} from '../models/Horario';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/horarios');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/horarios/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/horarios/'+id);
  }
  update(id:string, horario:Horario){

    return this.http.put(this.API_URI+'/horarios/'+id,horario);
  }
  save(horario:Horario){
    return this.http.post(this.API_URI+'/horarios', horario); 
  }

  
}
