import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosviagemPage } from './dadosviagem.page';

const routes: Routes = [
  {
    path: '',
    component: DadosviagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosviagemPageRoutingModule {}
