import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './lesson05/home/home.component';
import { WorksComponent } from './lesson05/works/works.component';
import { CenzorComponent } from './lesson05/works/cenzor/cenzor.component';
import { UserlistComponent } from './lesson05/works/userlist/userlist.component';
import { TasklistComponent } from './lesson05/works/tasklist/tasklist.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'works',component:WorksComponent, children: [
    {path:'cenzor', component:CenzorComponent},
    {path:'userlist', component:UserlistComponent},
    {path:'tasklist', component:TasklistComponent}
  ]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
