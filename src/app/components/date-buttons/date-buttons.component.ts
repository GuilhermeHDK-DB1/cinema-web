import { Component } from '@angular/core';

@Component({
  selector: 'app-date-buttons',
  templateUrl: './date-buttons.component.html',
  styleUrls: ['./date-buttons.component.css']
})
export class DateButtonsComponent {
  
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
