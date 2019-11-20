import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudianteEvaluacionesPage } from './estudiante-evaluaciones.page';

const routes: Routes = [
  {
    path: '',
    component: EstudianteEvaluacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudianteEvaluacionesPageRoutingModule {}
