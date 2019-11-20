import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudianteActividadesPageRoutingModule } from './estudiante-actividades-routing.module';

import { EstudianteActividadesPage } from './estudiante-actividades.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudianteActividadesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EstudianteActividadesPage]
})
export class EstudianteActividadesPageModule {}
