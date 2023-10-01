import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classificacaoIndicativa'
})
export class ClassificacaoIndicativaPipe implements PipeTransform {

  classificacaoFormatada: string = '';

  transform(classificacao: string): string {
    switch (classificacao) {
      case 'G': {
        this.classificacaoFormatada = 'L';
        break;
      }
      case 'PG': {
        this.classificacaoFormatada = '10';
        break;
      }
      case 'PG-13': {
        this.classificacaoFormatada = '14';
        break;
      }
      case 'R': {
        this.classificacaoFormatada = '16';
        break;
      }
      case 'NC-17': {
        this.classificacaoFormatada = '18';
        break;
      }
    }

    return this.classificacaoFormatada;

    //Livre,      //G       L
    //MaiorQue10, //PG      10
    //MaiorQue13, //PG-13   14
    //MaiorQue14, //R       16
    //MaiorQue18  //NC-17   18
  }
}
