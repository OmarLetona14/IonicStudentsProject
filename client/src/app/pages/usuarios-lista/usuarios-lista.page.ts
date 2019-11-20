import { Component, OnInit } from '@angular/core';

import {UsuariosService} from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.page.html',
  styleUrls: ['./usuarios-lista.page.scss'],
})
export class UsuariosListaPage implements OnInit {

  usuarios:any=[];

  constructor(private service:UsuariosService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(
      res=>{
        this.usuarios = res;
      },
      err=>{

      }
    );
  }



}
