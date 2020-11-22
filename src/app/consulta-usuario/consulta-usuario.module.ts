import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaUsuarioPageRoutingModule } from './consulta-usuario-routing.module';

import { ConsultaUsuarioPage } from './consulta-usuario.page';
import { ComponentModule } from '../component/component.module';
import { HeaderComponent } from '../component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaUsuarioPageRoutingModule,
    ComponentModule
  ],
  declarations: [ConsultaUsuarioPage,HeaderComponent]
})
export class ConsultaUsuarioPageModule {}
