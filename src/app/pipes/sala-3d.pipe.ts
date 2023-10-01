import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sala3D'
})
export class Sala3DPipe implements PipeTransform {

  transform(sala3D: boolean): string {
    if(sala3D)
      return 'Sala 3D';
    
    return 'Sala 2D';
  }
}
