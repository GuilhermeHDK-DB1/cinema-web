import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { ProgramacaoComponent } from './views/programacao/programacao.component';
import { DateButtonsComponent } from './components/date-buttons/date-buttons.component';
import { EmBreveComponent } from './views/em-breve/em-breve.component';
import { registerLocaleData } from '@angular/common';

import localePT from '@angular/common/locales/pt';
import { SessaoComponent } from './components/sessao/sessao.component';
import { IdiomaPipe } from './pipes/idioma.pipe';
import { SalaVipPipe } from './pipes/sala-vip.pipe';
import { Sala3DPipe } from './pipes/sala-3d.pipe';
import { ClassificacaoIndicativaPipe } from './pipes/classificacao-indicativa.pipe';
import { HttpClientModule } from '@angular/common/http';
registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    ProgramacaoComponent,
    DateButtonsComponent,
    EmBreveComponent,
    SessaoComponent,
    IdiomaPipe,
    SalaVipPipe,
    Sala3DPipe,
    ClassificacaoIndicativaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
