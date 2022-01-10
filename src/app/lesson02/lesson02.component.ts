import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-lesson02',
  templateUrl: './lesson02.component.html',
  styleUrls: ['./lesson02.component.scss']
})
export class Lesson02Component implements OnInit {
  public modalWindow = false;
  public login!: string;
  public password!: any;
  public email!: string;
  public editIndex!: number;
  public editStatus = false;
  public userForm = [{
    login: 'exemple',
    password: '12345',
    email: 'exemple@gmail.com'
  }];
  public person = {
    login: '',
    password: '',
    email: ''
  };
  constructor() {}

  ngOnInit(): void {}
  // modal window
  showModal(): void {
    this.modalWindow = !this.modalWindow;
  };
  //button add user
  newUser(): void {
    if (this.login.length > 1 && this.password.length > 4 && this.email.length > 3) {
      this.person = {
        login: '',
        password: '',
        email: ''
      };
      this.person.login = this.login;
      this.person.password = this.password;
      this.person.email = this.email;
      this.userForm.push(this.person)
      this.login = "";
      this.password = "";
      this.email = "";
    }
  }
  //button delete 
  deleteUser(index: number): void {
    this.userForm.splice(index, 1);
  }
  //button edit 
  editUser(index: number): void {
    this.login = this.userForm[index].login;
    this.password = this.userForm[index].password;
    this.email = this.userForm[index].email;
    this.editIndex = index;
    this.editStatus = true;
  }
  //button Edit User
  updateUser(): void {
    if (this.login.length > 1 && this.password.length > 4 && this.email.length > 3) {
      this.userForm[this.editIndex].login = this.login;
      this.userForm[this.editIndex].password = this.password;
      this.userForm[this.editIndex].email = this.email;
      this.editStatus = false;
      this.login = '';
      this.password = '';
      this.email = '';
    }
  }
}