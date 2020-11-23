import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaViagemPage } from './consulta-viagem.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaViagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaViagemPageRoutingModule {}
