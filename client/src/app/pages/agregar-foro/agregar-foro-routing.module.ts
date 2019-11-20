import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarForoPage } from './agregar-foro.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarForoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarForoPageRoutingModule {}
