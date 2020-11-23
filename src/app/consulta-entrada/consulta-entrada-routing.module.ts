import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaEntradaPage } from './consulta-entrada.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaEntradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaEntradaPageRoutingModule {}
