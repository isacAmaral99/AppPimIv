import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaClientesPageRoutingModule } from './consulta-clientes-routing.module';

import { ConsultaClientesPage } from './consulta-clientes.page';
import { ComponentModule } from '../component/component.module';
import { HeaderComponent } from '../component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaClientesPageRoutingModule,ReactiveFormsModule,
     ComponentModule

  ],
  declarations: [ConsultaClientesPage,HeaderComponent]
})
export class ConsultaClientesPageModule {}
