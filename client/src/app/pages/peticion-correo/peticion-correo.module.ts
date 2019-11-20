import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeticionCorreoPageRoutingModule } from './peticion-correo-routing.module';

import { PeticionCorreoPage } from './peticion-correo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeticionCorreoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PeticionCorreoPage]
})
export class PeticionCorreoPageModule {}
