import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idioma'
})
export class IdiomaPipe implements PipeTransform {


  transform(idioma: number): string {

    if(idioma === 0)
      return 'Legendado';
    
    return 'Dublado';
  }

}
