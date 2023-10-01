import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaVip'
})
export class SalaVipPipe implements PipeTransform {

  transform(salaVip: boolean): string {
    if(salaVip)
      return 'Sala VIP';
    
    return 'Sala Comum';
  }
}
