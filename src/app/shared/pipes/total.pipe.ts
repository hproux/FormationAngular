import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(param: number, coef: number, tva?: number): number{
    if (tva){
      return param * coef * (1 + tva / 100);
    }
    return param * coef;
  }

}
