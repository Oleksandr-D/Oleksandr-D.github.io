import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './lesson05/home/home.component';
import { WorksComponent } from './lesson05/works/works.component';
import { CenzorComponent } from './lesson05/works/cenzor/cenzor.component';
import { UserlistComponent } from './lesson05/works/userlist/userlist.component';
import { TasklistComponent } from './lesson05/works/tasklist/tasklist.component';

import { Lesson07Component } from './lesson07/lesson07.component';
import { AdminBlogComponentComponent } from './lesson07/admin-blog-component/admin-blog-component.component';
import { BlogComponentComponent } from './lesson07/blog-component/blog-component.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'works',component:WorksComponent, children: [
    {path:'cenzor', component:CenzorComponent},
    {path:'userlist', component:UserlistComponent},
    {path:'tasklist', component:TasklistComponent}
  ]},
  {path:'lesson07', component:Lesson07Component}, 
  {path:'admin',component:AdminBlogComponentComponent},
  {path:'blog',component:BlogComponentComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
