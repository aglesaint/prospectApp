import { Pipe, PipeTransform } from '@angular/core';
import { Prospect } from '../models/prospect.model';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
  transform(items: Array<Prospect>, args: string): Array<Prospect> {
    items.sort((a: any, b: any) => {
      if ( a[args] < b[args] ){
              return -1;
          } else if( a[args] > b[args] ){
              return 1;
          } else {
              return 0;
          }
      });
    return items;
  }
}