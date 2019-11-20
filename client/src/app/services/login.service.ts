import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { UsuarioLogin } from '../models/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI='http://localhost:3000';

  constructor(private http:HttpClient) { }

  requestLogin(usuarioLogin:UsuarioLogin){
    return this.http.post(this.API_URI+'/login',usuarioLogin);
  }

}
