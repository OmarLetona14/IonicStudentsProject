import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarMensajePageRoutingModule } from './agregar-mensaje-routing.module';

import { AgregarMensajePage } from './agregar-mensaje.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarMensajePageRoutingModule,
    ComponentsModule
  ],
  declarations: [AgregarMensajePage]
})
export class AgregarMensajePageModule {}
