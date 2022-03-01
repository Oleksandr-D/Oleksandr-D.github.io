import { Component, OnInit } from '@angular/core';
import { Lesson07servService } from '../shared/services/lesson07/lesson07serv.service';

@Component({
  selector: 'app-lesson07',
  templateUrl: './lesson07.component.html',
  styleUrls: ['./lesson07.component.scss']
})
export class Lesson07Component implements OnInit {
  public modalWindow = true;
  
  constructor(
    private Lesson07servService:Lesson07servService 
  ) { }

  ngOnInit(): void {}
  // modal window
  showModal(): void {
    this.modalWindow = !this.modalWindow;
  };
};
