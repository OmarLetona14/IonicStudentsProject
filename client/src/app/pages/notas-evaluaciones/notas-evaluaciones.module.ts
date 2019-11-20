import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotasEvaluacionesPageRoutingModule } from './notas-evaluaciones-routing.module';

import { NotasEvaluacionesPage } from './notas-evaluaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotasEvaluacionesPageRoutingModule
  ],
  declarations: [NotasEvaluacionesPage]
})
export class NotasEvaluacionesPageModule {}
