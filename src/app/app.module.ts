import { MensagemModule } from './componentes/mensagem/mensagem.module';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { PaginacicloComponent } from './componentes/ciclos/paginaciclo/paginaciclo.component';
import { UnidadeComponent } from './componentes/unidade/unidade.component';
import { FrenteEstrategicaComponent } from './componentes/frente-estrategica/frente-estrategica.component';
import { DetalhamentoComponent } from './componentes/detalhamento/detalhamento.component';
import { HomeComponent } from './componentes/home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    PaginacicloComponent,
    UnidadeComponent,
    FrenteEstrategicaComponent,
    DetalhamentoComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MensagemModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
