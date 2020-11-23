import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaViagemPageRoutingModule } from './consulta-viagem-routing.module';

import { ConsultaViagemPage } from './consulta-viagem.page';
import { ComponentModule } from '../component/component.module';
import { HeaderComponent } from '../component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaViagemPageRoutingModule,
    ComponentModule
  ],
  declarations: [ConsultaViagemPage,HeaderComponent]
})
export class ConsultaViagemPageModule {}
