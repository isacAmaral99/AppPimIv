import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarViagemPage } from './cadastrar-viagem.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarViagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarViagemPageRoutingModule {}
