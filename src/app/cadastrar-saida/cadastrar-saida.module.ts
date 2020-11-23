import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarSaidaPageRoutingModule } from './cadastrar-saida-routing.module';

import { CadastrarSaidaPage } from './cadastrar-saida.page';
import { ComponentModule } from '../component/component.module';
import { HeaderComponent } from '../component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarSaidaPageRoutingModule,
    ReactiveFormsModule,
    ComponentModule
  ],
  declarations: [CadastrarSaidaPage,HeaderComponent]
})
export class CadastrarSaidaPageModule {}
