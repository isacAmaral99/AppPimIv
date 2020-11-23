import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaSaidaPage } from './consulta-saida.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaSaidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaSaidaPageRoutingModule {}
