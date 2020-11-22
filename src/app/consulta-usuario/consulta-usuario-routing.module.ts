import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaUsuarioPage } from './consulta-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaUsuarioPageRoutingModule {}
