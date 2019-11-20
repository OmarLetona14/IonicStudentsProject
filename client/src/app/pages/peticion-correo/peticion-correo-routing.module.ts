import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeticionCorreoPage } from './peticion-correo.page';

const routes: Routes = [
  {
    path: '',
    component: PeticionCorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeticionCorreoPageRoutingModule {}
