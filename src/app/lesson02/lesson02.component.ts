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
    password: '1234',
    email: 'exemple@gmail.com'
  }];
  public person = {
    login: '',
    password: '',
    email: ''
  };
  public log!: any;
  public paswd!: any;
  public em!: any;
  public loginRegExp: RegExp = /^[a-zA-Z]{3,16}$/;
  public emailRegExp: RegExp = /^[a-zA-Z0-9_.&#]+[^\s@]+@[^\s@]+[.][^\s@\W]{1,3}$/;
  public paswdRegExp: RegExp = /^[a-zA-Z0-9]{4,16}$/;
  public addUserStatus = false;
  constructor() {}

  ngOnInit(): void {}
  // modal window
  showModal(): void {
    this.modalWindow = !this.modalWindow;
  };
  //button add user
  newUser(): void {
    this.check();
    if (this.addUserStatus) {
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
      this.addUserStatus = false;
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
    this.check();
    if (this.addUserStatus) {
      this.userForm[this.editIndex].login = this.login;
      this.userForm[this.editIndex].password = this.password;
      this.userForm[this.editIndex].email = this.email;
      this.editStatus = false;
      this.login = '';
      this.password = '';
      this.email = '';
      this.addUserStatus = false;
    }
  }
  // input validation
  getS = (selector: any) => document.querySelector(selector);
  check() {
    this.log = this.loginRegExp.test(this.getS('#log').value);
    this.paswd = this.paswdRegExp.test(this.getS('#paswd').value);
    this.em = this.emailRegExp.test(this.getS('#em').value);
    if (this.log && this.paswd && this.em) {
      this.addUserStatus = true;
      console.log('User created')
    } else {
      this.addUserStatus = false;
      alert('Check the entered data')
    }
  }

};