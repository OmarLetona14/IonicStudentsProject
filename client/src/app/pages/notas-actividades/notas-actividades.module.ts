import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotasActividadesPageRoutingModule } from './notas-actividades-routing.module';

import { NotasActividadesPage } from './notas-actividades.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotasActividadesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NotasActividadesPage]
})
export class NotasActividadesPageModule {}
