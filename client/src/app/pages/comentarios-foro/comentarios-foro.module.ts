import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentariosForoPageRoutingModule } from './comentarios-foro-routing.module';

import { ComentariosForoPage } from './comentarios-foro.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComentariosForoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ComentariosForoPage]
})
export class ComentariosForoPageModule {}
