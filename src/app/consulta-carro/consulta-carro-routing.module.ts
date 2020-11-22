import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaCarroPage } from './consulta-carro.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaCarroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaCarroPageRoutingModule {}
