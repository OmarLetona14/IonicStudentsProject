import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosAsignadosPage } from './cursos-asignados.page';

const routes: Routes = [
  {
    path: '',
    component: CursosAsignadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosAsignadosPageRoutingModule {}
