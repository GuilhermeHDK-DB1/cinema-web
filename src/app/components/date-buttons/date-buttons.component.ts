import { ProgramacaoService } from 'src/app/services/programacao-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { highlightedStateTrigger } from 'src/app/animations';

@Component({
  selector: 'app-date-buttons',
  templateUrl: './date-buttons.component.html',
  styleUrls: ['./date-buttons.component.css'],
  animations: [
    highlightedStateTrigger
  ]
})
export class DateButtonsComponent implements OnInit{
  
  public datas: Date[] = [];
  selectedDateIndex: number | null = null;

  @Output() emitirData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < 7; i++) {
      const data = new Date();
      data.setDate(data.getDate() + i);
      this.datas.push(data);       
    }
    this.selectedDateIndex = 0;
  }

  setIndex(index: number) {
    this.selectedDateIndex = index;
  }

  isDateSelected(index: number) {
    return this.selectedDateIndex === index;
  }

  public selecionarData(data: Date) {
    this.emitirData.emit(data);

    console.log(data);
    console.log(this.selectedDateIndex);
  }
}
