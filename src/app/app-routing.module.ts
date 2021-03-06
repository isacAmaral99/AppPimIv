import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dash-board',
    loadChildren: () => import('./dash-board/dash-board.module').then( m => m.DashBoardPageModule)
  },
  {
    path: 'cadastros',
    loadChildren: () => import('./cadastros/cadastros.module').then( m => m.CadastrosPageModule)
  },
  {
    path: 'consultas',
    loadChildren: () => import('./consultas/consultas.module').then( m => m.ConsultasPageModule)
  },
  {
    path: 'dadosviagem',
    loadChildren: () => import('./dadosviagem/dadosviagem.module').then( m => m.DadosviagemPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'consulta-clientes',
    loadChildren: () => import('./consulta-clientes/consulta-clientes.module').then( m => m.ConsultaClientesPageModule)
  },
  {
    path: 'cadastro-carro',
    loadChildren: () => import('./cadastro-carro/cadastro-carro.module').then( m => m.CadastroCarroPageModule)
  },
  {
    path: 'cadastro-usuario',
    loadChildren: () => import('./cadastro-usuario/cadastro-usuario.module').then( m => m.CadastroUsuarioPageModule)
  },
  {
    path: 'consulta-usuario',
    loadChildren: () => import('./consulta-usuario/consulta-usuario.module').then( m => m.ConsultaUsuarioPageModule)
  },
  {
    path: 'consulta-carro',
    loadChildren: () => import('./consulta-carro/consulta-carro.module').then( m => m.ConsultaCarroPageModule)
  },
  {
    path: 'cadastro-ordem-servico',
    loadChildren: () => import('./cadastro-ordem-servico/cadastro-ordem-servico.module').then( m => m.CadastroOrdemServicoPageModule)
  },
  {
    path: 'consulta-ordem-servico',
    loadChildren: () => import('./consulta-ordem-servico/consulta-ordem-servico.module').then( m => m.ConsultaOrdemServicoPageModule)
  },
  {
    path: 'consulta-viagem',
    loadChildren: () => import('./consulta-viagem/consulta-viagem.module').then( m => m.ConsultaViagemPageModule)
  },
  {
    path: 'cadastrar-viagem',
    loadChildren: () => import('./cadastrar-viagem/cadastrar-viagem.module').then( m => m.CadastrarViagemPageModule)
  },
  {
    path: 'cadastrar-saida',
    loadChildren: () => import('./cadastrar-saida/cadastrar-saida.module').then( m => m.CadastrarSaidaPageModule)
  },
  {
    path: 'consulta-saida',
    loadChildren: () => import('./consulta-saida/consulta-saida.module').then( m => m.ConsultaSaidaPageModule)
  },
  {
    path: 'consulta-entrada',
    loadChildren: () => import('./consulta-entrada/consulta-entrada.module').then( m => m.ConsultaEntradaPageModule)
  },
  {
    path: 'cadastra-entrada',
    loadChildren: () => import('./cadastra-entrada/cadastra-entrada.module').then( m => m.CadastraEntradaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
