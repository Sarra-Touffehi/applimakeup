import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'etoilenom'
})
export class EtoilenomPipe implements PipeTransform {

  transform(nom: string): string {
    return '*'+nom+'**';
  }

}
