import { Component } from '@angular/core';

@Component({
  selector: 'app-programacao',
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.css']
})
export class ProgramacaoComponent {

  public datas: Date[] = [];

  constructor() { 
    for(let i = 0; i < 7; i++) {
      const data = new Date();
      data.setDate(data.getDate() + i);
      this.datas.push(data);
    }
  }


  public selecionarData(data: Date) {
    console.log(data);
  }
}
