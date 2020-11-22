import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaClientesPageRoutingModule } from './consulta-clientes-routing.module';

import { ConsultaClientesPage } from './consulta-clientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaClientesPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [ConsultaClientesPage]
})
export class ConsultaClientesPageModule {}
