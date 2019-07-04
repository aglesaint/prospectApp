import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListProspectsComponent } from './components/list-prospects/list-prospects.component';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { FilterPipe } from './components/list-prospects/pipes/index';
import { OrderByPipe } from './components/list-prospects/pipes/index';
import { IdProspectsComponent, DialogInfoComponent } from './components/index';

@NgModule({
  declarations: [ListProspectsComponent, FilterPipe, OrderByPipe, IdProspectsComponent, DialogInfoComponent],
  entryComponents: [IdProspectsComponent, DialogInfoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  exports: [
    MatCardModule,
    MatExpansionModule
  ]
})
export class ProspectModule { }

