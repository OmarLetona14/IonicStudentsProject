import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.page.html',
  styleUrls: ['./cursos-lista.page.scss'],
})
export class CursosListaPage implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
