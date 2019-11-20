import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosListaPage } from './usuarios-lista.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosListaPageRoutingModule {}
