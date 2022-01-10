import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson01Component } from './lesson01/lesson01.component';
import { FormsModule } from '@angular/forms';
import { Lesson02Component } from './lesson02/lesson02.component';

@NgModule({
  declarations: [
    AppComponent,
    Lesson01Component,
    Lesson02Component
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
