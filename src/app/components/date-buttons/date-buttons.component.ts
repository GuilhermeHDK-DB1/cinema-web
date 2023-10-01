import { Component } from '@angular/core';
import { highlightedStateTrigger } from 'src/app/animations';

@Component({
  selector: 'app-date-buttons',
  templateUrl: './date-buttons.component.html',
  styleUrls: ['./date-buttons.component.css'],
  animations: [
    highlightedStateTrigger
  ]
})
export class DateButtonsComponent {
  
  public datas: Date[] = [];
  selectedDateIndex: number | null = null;

  constructor() { 
    for(let i = 0; i < 7; i++) {
      const data = new Date();
      data.setDate(data.getDate() + i);
      this.datas.push(data);
    }
  }

  setIndex(index: number) {
    this.selectedDateIndex = index;
  }

  isDateSelected(index: number) {
    return this.selectedDateIndex === index;
  }

  public selecionarData(data: Date) {
    console.log(data);
    console.log(this.selectedDateIndex);
  }
}
