import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioEstudiantePageRoutingModule } from './inicio-estudiante-routing.module';

import { InicioEstudiantePage } from './inicio-estudiante.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioEstudiantePageRoutingModule,
    ComponentsModule
  ],
  declarations: [InicioEstudiantePage]
})
export class InicioEstudiantePageModule {}
