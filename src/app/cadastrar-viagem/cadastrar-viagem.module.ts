import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarViagemPageRoutingModule } from './cadastrar-viagem-routing.module';

import { CadastrarViagemPage } from './cadastrar-viagem.page';
import { ComponentModule } from '../component/component.module';
import { HeaderComponent } from '../component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarViagemPageRoutingModule,
    ReactiveFormsModule,
    ComponentModule
  ],
  declarations: [CadastrarViagemPage,HeaderComponent]
})
export class CadastrarViagemPageModule {}
