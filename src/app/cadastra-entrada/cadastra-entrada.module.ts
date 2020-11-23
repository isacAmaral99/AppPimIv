import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastraEntradaPageRoutingModule } from './cadastra-entrada-routing.module';

import { CadastraEntradaPage } from './cadastra-entrada.page';
import { ComponentModule } from '../component/component.module';
import { HeaderComponent } from '../component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastraEntradaPageRoutingModule,
    ReactiveFormsModule,
    ComponentModule
  ],
  declarations: [CadastraEntradaPage,HeaderComponent]
})
export class CadastraEntradaPageModule {}
