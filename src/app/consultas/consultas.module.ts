import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultasPageRoutingModule } from './consultas-routing.module';

import { ConsultasPage } from './consultas.page';
import { ComponentModule } from '../component/component.module';
import { HeaderComponent } from '../component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultasPageRoutingModule,
    ComponentModule
  ],
  declarations: [ConsultasPage, HeaderComponent]
})
export class ConsultasPageModule {}
