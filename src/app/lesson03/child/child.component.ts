import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() public taskList = [{
    inputTask: '',
    check: false,
    buttonDelete: true
  }];
  public count = 0;
  public inputTask!: string;
  public userTask = {
    inputTask: ''
  };
  public editStatus = false;
  public editIndex!: number;
  @Output() fromChild = new EventEmitter < number > ();

  constructor() {}
  ngOnInit(): void {}
  //button delete 
  deleteTask(index: number): void {
    this.editStatus = false;
    this.taskList.splice(index, 1);
    this.count = this.taskList.length;
    this.fromChild.emit(this.count);
    this.inputTask = '';
  }
  // button Edit
  editTask(index: number): void {
    if (!this.taskList[index].check) {
      this.inputTask = this.taskList[index].inputTask;
      this.taskList[index].buttonDelete = true;
      this.editIndex = index;
      this.editStatus = true;
    }
  }
  //button Save
  saveEditedUser(): void {
    this.taskList[this.editIndex].inputTask = this.inputTask;
    this.editStatus = false;
    if (this.taskList[this.editIndex].check) {
      this.taskList[this.editIndex].buttonDelete = false;
    }
  }
  // checkbox verification
  chekbox(index: number): void {
    if (this.taskList[index].check) {
      this.taskList[index].buttonDelete = true;
      this.taskList[index].check = false;
    } else {
      this.taskList[index].check = true;
      this.taskList[index].buttonDelete = false;
    }
  }
}