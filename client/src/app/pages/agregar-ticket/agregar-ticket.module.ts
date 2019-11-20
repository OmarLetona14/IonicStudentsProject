import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarTicketPageRoutingModule } from './agregar-ticket-routing.module';

import { AgregarTicketPage } from './agregar-ticket.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarTicketPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AgregarTicketPage]
})
export class AgregarTicketPageModule {}
