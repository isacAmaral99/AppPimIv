import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrosPageRoutingModule } from './cadastros-routing.module';

import { CadastrosPage } from './cadastros.page';
import { ComponentModule } from '../component/component.module';
import { HeaderComponent } from '../component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrosPageRoutingModule,
    ComponentModule

  ],
  declarations: [CadastrosPage,HeaderComponent]
})
export class CadastrosPageModule {}
