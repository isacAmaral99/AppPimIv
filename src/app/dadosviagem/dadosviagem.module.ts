import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosviagemPageRoutingModule } from './dadosviagem-routing.module';

import { DadosviagemPage } from './dadosviagem.page';
import { ComponentModule } from '../component/component.module';
import { HeaderComponent } from '../component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosviagemPageRoutingModule,
    ComponentModule
  ],
  declarations: [DadosviagemPage,HeaderComponent]
})
export class DadosviagemPageModule {}
