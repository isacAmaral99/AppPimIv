import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroCarroPageRoutingModule } from './cadastro-carro-routing.module';

import { CadastroCarroPage } from './cadastro-carro.page';
import { ComponentModule } from '../component/component.module';
import { HeaderComponent } from '../component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroCarroPageRoutingModule,
    ReactiveFormsModule,
    ComponentModule
  ],
  declarations: [CadastroCarroPage,HeaderComponent]
})
export class CadastroCarroPageModule {}
