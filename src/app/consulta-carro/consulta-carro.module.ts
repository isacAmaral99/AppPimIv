import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaCarroPageRoutingModule } from './consulta-carro-routing.module';

import { ConsultaCarroPage } from './consulta-carro.page';
import { ComponentModule } from '../component/component.module';
import { HeaderComponent } from '../component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaCarroPageRoutingModule,
    ComponentModule
  ],
  declarations: [ConsultaCarroPage,HeaderComponent]
})
export class ConsultaCarroPageModule {}
