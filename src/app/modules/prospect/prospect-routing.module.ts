import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProspectsComponent } from './components/list-prospects/list-prospects.component';

const routes: Routes = [
  {path: 'prospects', component: ListProspectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProspectRoutingModule { }
