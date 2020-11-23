import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaEntradaPageRoutingModule } from './consulta-entrada-routing.module';

import { ConsultaEntradaPage } from './consulta-entrada.page';
import { ComponentModule } from '../component/component.module';
import { HeaderComponent } from '../component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaEntradaPageRoutingModule,
    ReactiveFormsModule,
    ComponentModule
  ],
  declarations: [ConsultaEntradaPage,HeaderComponent]
})
export class ConsultaEntradaPageModule {}
