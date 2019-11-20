import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarMensajePage } from './agregar-mensaje.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarMensajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarMensajePageRoutingModule {}
