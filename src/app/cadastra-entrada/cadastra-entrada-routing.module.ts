import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastraEntradaPage } from './cadastra-entrada.page';

const routes: Routes = [
  {
    path: '',
    component: CadastraEntradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastraEntradaPageRoutingModule {}
