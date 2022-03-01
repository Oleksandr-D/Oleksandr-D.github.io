import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson05',
  templateUrl: './lesson05.component.html',
  styleUrls: ['./lesson05.component.scss']
})
export class Lesson05Component implements OnInit {
  public modalWindow = false;


  constructor() { }

  ngOnInit(): void {
  }
   // modal window
   showModal(): void {
    this.modalWindow = !this.modalWindow;
  };
}
