import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosListaPageRoutingModule } from './usuarios-lista-routing.module';

import { UsuariosListaPage } from './usuarios-lista.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosListaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UsuariosListaPage]
})
export class UsuariosListaPageModule {}
