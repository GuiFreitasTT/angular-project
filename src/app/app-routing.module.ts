import { HomeComponent } from './componentes/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginacicloComponent } from './componentes/ciclos/paginaciclo/paginaciclo.component';
import { DetalhamentoComponent } from './componentes/detalhamento/detalhamento.component';
import { FrenteEstrategicaComponent } from './componentes/frente-estrategica/frente-estrategica.component';
import { UnidadeComponent } from './componentes/unidade/unidade.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'paginaciclo',
    component: PaginacicloComponent
  },
  {
    path:'unidade',
    component: UnidadeComponent
  },
  {
    path:'frente-estrategica',
    component: FrenteEstrategicaComponent
  },
  {
    path: 'detalhamento',
    component: DetalhamentoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
