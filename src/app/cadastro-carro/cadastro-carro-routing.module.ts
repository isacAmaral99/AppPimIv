import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroCarroPage } from './cadastro-carro.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroCarroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroCarroPageRoutingModule {}
