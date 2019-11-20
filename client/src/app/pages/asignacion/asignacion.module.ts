import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignacionPageRoutingModule } from './asignacion-routing.module';

import { AsignacionPage } from './asignacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AsignacionPage]
})
export class AsignacionPageModule {}
