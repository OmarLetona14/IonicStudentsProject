import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.page.html',
  styleUrls: ['./entrega.page.scss'],
})
export class EntregaPage implements OnInit {


  tipo_actividad:string;
  idActividad:string;

  constructor() { }

  ngOnInit() {
    this.idActividad = localStorage.getItem('idActividad');
    this.tipo_actividad = localStorage.getItem('tipo_actividad');
  }

}
