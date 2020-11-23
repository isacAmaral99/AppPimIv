import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaSaidaPageRoutingModule } from './consulta-saida-routing.module';

import { ConsultaSaidaPage } from './consulta-saida.page';
import { ComponentModule } from '../component/component.module';
import { HeaderComponent } from '../component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaSaidaPageRoutingModule,
    ReactiveFormsModule,
    ComponentModule
  ],
  declarations: [ConsultaSaidaPage,HeaderComponent]
})
export class ConsultaSaidaPageModule {}
