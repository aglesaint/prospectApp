import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProspectsComponent,
         IdProspectsComponent
} from './modules/prospect/components/index';

const routes: Routes = [
  { path: 'prospects', component: ListProspectsComponent},
  { path: 'identity', component: IdProspectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
