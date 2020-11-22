import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroOrdemServicoPage } from './cadastro-ordem-servico.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroOrdemServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroOrdemServicoPageRoutingModule {}
