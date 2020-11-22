import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesPageRoutingModule } from './clientes-routing.module';

import { ClientesPage } from './clientes.page';
import { ComponentModule } from '../component/component.module';
import { HeaderComponent } from '../component/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesPageRoutingModule,
    ComponentModule,
    ReactiveFormsModule
  ],
  declarations: [ClientesPage,HeaderComponent]
})
export class ClientesPageModule {}
