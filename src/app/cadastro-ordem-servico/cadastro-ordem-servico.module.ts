import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroOrdemServicoPageRoutingModule } from './cadastro-ordem-servico-routing.module';

import { CadastroOrdemServicoPage } from './cadastro-ordem-servico.page';
import { ComponentModule } from '../component/component.module';
import { HeaderComponent } from '../component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroOrdemServicoPageRoutingModule,
    ReactiveFormsModule,
    ComponentModule
  ],
  declarations: [CadastroOrdemServicoPage,HeaderComponent]
})
export class CadastroOrdemServicoPageModule {}
