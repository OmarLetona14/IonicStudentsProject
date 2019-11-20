import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarForoPageRoutingModule } from './agregar-foro-routing.module';

import { AgregarForoPage } from './agregar-foro.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarForoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AgregarForoPage]
})
export class AgregarForoPageModule {}
