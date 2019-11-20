import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Ticket} from '../models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  API_URI='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.API_URI+'/tickets');
  }

  getOne(id:string){
    return this.http.get(this.API_URI+'/tickets/'+id);
  }

  delete(id:string){
    return this.http.delete(this.API_URI+'/tickets/'+id);
  }
  update(id:string, ticket:Ticket){

    return this.http.put(this.API_URI+'/tickets/'+id,ticket);
  }
  save(ticket:Ticket){
    return this.http.post(this.API_URI+'/tickets', ticket); 
  }

  getByStudent(idEstudiante:string){
    return this.http.get(this.API_URI+'/tickets/'+idEstudiante);
  }
}