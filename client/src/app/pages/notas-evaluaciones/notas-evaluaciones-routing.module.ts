import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotasEvaluacionesPage } from './notas-evaluaciones.page';

const routes: Routes = [
  {
    path: '',
    component: NotasEvaluacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotasEvaluacionesPageRoutingModule {}
