import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComentariosForoPage } from './comentarios-foro.page';

const routes: Routes = [
  {
    path: '',
    component: ComentariosForoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComentariosForoPageRoutingModule {}
