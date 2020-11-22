import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaOrdemServicoPageRoutingModule } from './consulta-ordem-servico-routing.module';

import { ConsultaOrdemServicoPage } from './consulta-ordem-servico.page';
import { ComponentModule } from '../component/component.module';
import { HeaderComponent } from '../component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaOrdemServicoPageRoutingModule,
    ComponentModule
  ],
  declarations: [ConsultaOrdemServicoPage,HeaderComponent]
})
export class ConsultaOrdemServicoPageModule {}
