import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaOrdemServicoPage } from './consulta-ordem-servico.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaOrdemServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaOrdemServicoPageRoutingModule {}
