import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotasActividadesPage } from './notas-actividades.page';

const routes: Routes = [
  {
    path: '',
    component: NotasActividadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotasActividadesPageRoutingModule {}
