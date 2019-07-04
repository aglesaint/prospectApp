import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProspectModule } from './modules/prospect/prospect.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProspectModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }