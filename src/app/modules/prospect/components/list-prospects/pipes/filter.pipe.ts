import { Pipe, PipeTransform } from '@angular/core';
import { Prospect } from '../models/prospect.model';


@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<Prospect>, args: any[], counter): any[] {

  if (!args) {
        return ;
      } else {
        const resultArray = [];
        const bSsearchTerm: boolean = args[0].searchTerm.length === 0 ? false : true;
        const bName: boolean = args[0].nom.length === 0 ? true : false;
        const bFirstName: boolean = args[0].prenom.length === 0 ? true : false;
        const bEmail: boolean = args[0].email.length === 0 ? true : false;

        // free search
        if ( bSsearchTerm ) {
          const resultSearchTerm = [];
          items.map(item => {
            const valueItem = args[0].searchTerm[0].toLowerCase();
            for ( const x in item ) {
              if ( item[x].toString().toLowerCase().match(valueItem)) {
                if (resultSearchTerm.indexOf(item) === -1) {
                  resultSearchTerm.push(item);
                }
              }
            }
          });
          if ( resultSearchTerm.length > 0) {
            items = resultSearchTerm;
          } else {
            this.setCount(resultArray, counter);
            return resultArray; // return nothing
          }
        }

        // nom, prenom, email search
        for (const item of items) {
          if (bName || args[0].nom.indexOf(item.nom) !== -1 ) {
            if (bFirstName || args[0].prenom.indexOf(item.prenom) !== -1 ) {
              if (bEmail || args[0].email.indexOf(item.email) !== -1 ) {
                resultArray.push(item);
              }
            }
          }
        }
        this.setCount(resultArray, counter);
        return resultArray;
      }
  }

  private setCount(res, counter) {
     const pluriel: string = (res.length > 1) ? 's' : '';
     counter.count = res.length.toString() + ' résultat' + pluriel;
  }


}
