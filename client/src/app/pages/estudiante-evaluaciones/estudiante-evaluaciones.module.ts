import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudianteEvaluacionesPageRoutingModule } from './estudiante-evaluaciones-routing.module';

import { EstudianteEvaluacionesPage } from './estudiante-evaluaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudianteEvaluacionesPageRoutingModule
  ],
  declarations: [EstudianteEvaluacionesPage]
})
export class EstudianteEvaluacionesPageModule {}
