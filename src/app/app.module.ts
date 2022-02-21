import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson01Component } from './lesson01/lesson01.component';
import { FormsModule } from '@angular/forms';
import { Lesson02Component } from './lesson02/lesson02.component';
import { Lesson03Component } from './lesson03/lesson03.component';
import { ChildComponent } from './lesson03/child/child.component';
import { Lesson04Component } from './lesson04/lesson04.component';
import { SearchPipe } from './lesson04/search.pipe';
import { SortPipe } from './lesson04/sort.pipe';

import { Lesson05Component } from './lesson05/lesson05.component';
import { HomeComponent } from './lesson05/home/home.component';
import { WorksComponent } from './lesson05/works/works.component';
import { CenzorComponent } from './lesson05/works/cenzor/cenzor.component';
import { UserlistComponent } from './lesson05/works/userlist/userlist.component';
import { TasklistComponent } from './lesson05/works/tasklist/tasklist.component';
import { Lesson06Component } from './lesson06/lesson06.component';
import { ButtonSkipTestAndTemplateComponent } from './button-skip-test-and-template/button-skip-test-and-template.component';



@NgModule({
  declarations: [
    AppComponent,
    Lesson01Component,
    Lesson02Component,
    Lesson03Component,
    ChildComponent,
    Lesson04Component,
    SearchPipe,
    SortPipe,
    Lesson05Component,
    HomeComponent,
    WorksComponent,
    CenzorComponent,
    UserlistComponent,
    TasklistComponent,
    Lesson06Component,
    ButtonSkipTestAndTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
