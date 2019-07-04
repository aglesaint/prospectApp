import { Component, OnInit, Input } from '@angular/core';
import { ProspectsService } from './services/prospects.service';
import { Prospect } from './models/prospect.model';
import { isNil } from 'lodash';

@Component({
  selector: 'app-list-prospects',
  templateUrl: './list-prospects.component.html',
  styleUrls: ['./list-prospects.component.scss'],

  
})
export class ListProspectsComponent implements OnInit {
  public panelOpenState = false;

  public prospects = [];
  public filteredCount = {count: 0};
  public removableChips = true;

  public searchTermValue: string[] = [];
  public searchNameValue: string[] = [];
  public searchFirstNameValue: string[] = [];
  public searchEmailValue: string[] = [];
  public searchValuesObjInit = [];
  public jsonValues: string[] = [];

  public sortBy = [
    {value: 'ecole', name: 'Ecole'},
    {value: 'nom', name: 'Nom'},
    {value: 'prenom', name: 'Prénom'}
  ];
  public prospectOrderByProperty = 'nom';
  public selectedSortByValue = 'nom';

  constructor( private prospectsService: ProspectsService ) {
    // init
    this.searchValuesObjInit = [{searchTerm: [], nom: [], prenom: [], email: []}];

    // get json file data
    this.prospectsService.get_propects().subscribe((res: Prospect[]) => {
      this.prospects = res;
      this.filteredCount.count = this.prospects.length;
    });
  }

  ngOnInit() {
  }

  /**
   *
   * @param value string
   */
  public setFreeSearch(value: string): void {
      this.searchTermValue.splice(0, 1);
      this.searchTermValue.push(value);
  }

  /**
   *
   * @param value string
   */
  public setNameSearch(value: string): void {
    this.searchNameValue.splice(0, 1);
    this.searchNameValue.push(value);
  }

  /**
   *
   * @param value string
   */
  public setFirstNameSearch(value: string): void {
    this.searchFirstNameValue.splice(0, 1);
    this.searchFirstNameValue.push(value);
  }

  public setEmailSearch(value: string): void {
    this.searchEmailValue.splice(0, 1);
    this.searchEmailValue.push(value);
  }


  /**
   * launch search on press button
   * @param e event
   */
  public launchSearch(e) {
    this.searchValuesObjInit = [];

    const jsonSearch = {
        searchTerm: [],
        nom: [],
        prenom: [],
        email: []
    };

    // input search
    this.searchTermValue.map(value => {
      if ( !isNil(value) ) {
        jsonSearch.searchTerm.push(this.searchTermValue[0]);
      }
    });

    // input name
    this.searchNameValue.map(value => {
      if ( !isNil(value)) {
        jsonSearch.nom.push(this.searchNameValue[0]);
      }
    });

    // input prenom
    this.searchFirstNameValue.map(value => {
      if ( !isNil(value)) {
        jsonSearch.prenom.push(this.searchFirstNameValue[0]);
      }
    });

    // input email
    this.searchEmailValue.map(value => {
      if ( !isNil(value)) {
        jsonSearch.email.push(this.searchEmailValue[0]);
      }
    });

    this.searchValuesObjInit.push(jsonSearch);
  }



public changeTrierPar(value: string) {
  this.prospectOrderByProperty = value.trim();
}


/***
 * remove chips
 */
  public removeChips(index: number, key: number): void {
    switch (key) {
      case 0:
        if (index >= 0) {
          this.searchTermValue.splice(index, 1);
          this.searchValuesObjInit[0].searchTerm.splice(index, 1);
          (document.getElementById('inputSearchTerm') as HTMLInputElement).value = '';
        }
        break;

      case 1:
        if (index >= 0) {
          this.searchNameValue.splice(index, 1);
          this.searchValuesObjInit[0].nom.splice(index, 1);
          (document.getElementById('inputSearchName') as HTMLInputElement).value = '';
        }
        break;

      case 2:
        if (index >= 0) {
          this.searchFirstNameValue.splice(index, 1);
          this.searchValuesObjInit[0].prenom.splice(index, 1);
          (document.getElementById('inputSearchFirstName') as HTMLInputElement).value = '';
        }
        break;

      case 3:
        if (index >= 0) {
          this.searchEmailValue.splice(index, 1);
          this.searchValuesObjInit[0].email.splice(index, 1);
          (document.getElementById('inputSearchEmail') as HTMLInputElement).value = '';
        }
        break;
    }
  }


}
