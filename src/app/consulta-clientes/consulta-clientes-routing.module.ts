import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaClientesPage } from './consulta-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaClientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaClientesPageRoutingModule {}
