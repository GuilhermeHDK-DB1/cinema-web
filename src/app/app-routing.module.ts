import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramacaoComponent } from './views/programacao/programacao.component';
import { EmBreveComponent } from './views/em-breve/em-breve.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'programacao',
    pathMatch:'full',
  },
  {
    path:'programacao',
    component: ProgramacaoComponent
  },
  {
    path:'emBreve',
    component: EmBreveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
