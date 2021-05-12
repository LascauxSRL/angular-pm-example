import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { MasterComponent } from './components/master/master.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/master',
  pathMatch: 'full'
},
{
  path: 'master',
  component: MasterComponent
},
{
  path: 'details/:id',
  component: DetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
