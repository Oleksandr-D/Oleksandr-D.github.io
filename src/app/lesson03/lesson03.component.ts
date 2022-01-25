import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-lesson03',
  templateUrl: './lesson03.component.html',
  styleUrls: ['./lesson03.component.scss']
})
export class Lesson03Component implements OnInit {
  public modalWindow = false;
  public count = 1;
  public inputTask = '';
  public taskList = [{
    inputTask: 'Here will be your task',
    check: false,
    buttonDelete: true
  }];
  public userTask = {
    inputTask: '',
    check: false,
    buttonDelete: true
  };
  constructor() {}

  ngOnInit(): void {}
  // modal window
  showModal(): void {
    this.modalWindow = !this.modalWindow;
  };
  // button Add
  addTaskk(): void {
    if (this.count < 6) {
      if (this.inputTask.length > 1) {
        this.userTask = {
          inputTask: '',
          check: false,
          buttonDelete: true
        };
        this.userTask.inputTask = this.inputTask;
        this.taskList.push(this.userTask)
        this.inputTask = "";
        ++this.count;
      } else {
        alert('Wrire some task')
      }
    }
  }
  // Count of task from child component
  countTask(data: number) {
    this.count = data;
  }
}