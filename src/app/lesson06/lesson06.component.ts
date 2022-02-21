import {Component,OnInit} from '@angular/core';
import {IBlog} from '../interfaces/blog/blogs.interface';
import {IUsers} from '../interfaces/users/users.interface';
import {BlogService} from '../shared/services/blog/blog.service';

@Component({
  selector: 'app-lesson06',
  templateUrl: './lesson06.component.html',
  styleUrls: ['./lesson06.component.scss']
})
export class Lesson06Component implements OnInit {
  public modalWindow = false;
  public enterStatus = true;
  public signInWindow = false;
  public addPostWindow = false;
  public signUpWindow = false;
  public adminStatus = false;
  public userBlogs!: IBlog[];
  public newUser: IUsers[] = [];
  public topic!: string;
  public message!: string;
  public editStatus = false;
  public editId!: number;
  public editUserName!:string;
  public email!: string;
  public password!: string;
  public userName!: string;
  public log!: any;
  public paswd!: any;
  public em!: any;
  public loginRegExp: RegExp = /^[A-Za-zА-Яа-я]{3,17}$/;
  public emailRegExp: RegExp = /^[a-zA-Z0-9_.&#]+[^\s@]+@[^\s@]+[.][^\s@\W]{1,3}$/;
  public paswdRegExp: RegExp = /^[a-zA-Z0-9]{4,16}$/;
  public addUserStatus = false;
  public name!: string;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getServiceData();
  };
  // modal window
  showModal(): void {
    this.modalWindow = !this.modalWindow;
  };
  //get data from servise
  getServiceData(): void {
    this.userBlogs = this.blogService.getBlogs();
    this.newUser = this.blogService.getUsers();
  };
  //button Sign in
  signIn(): void {
    this.signInWindow = !this.signInWindow;
    this.resetForm();
  };
  //button Add post
  addPost(): void {
    this.addPostWindow = !this.addPostWindow;
    this.topic = '';
    this.message = '';
  };
  //button Post in the add post window
  addPostModal(): void {
    if (this.userBlogs.length < 4) {
      const newPost = {
        id: 1,
        postedBy: this.name,
        topic: this.topic,
        date: new Date(),
        message: this.message
      };
      if (this.userBlogs.length > 0) { //creates unique id
        const id = this.userBlogs.slice(-1)[0].id;
        newPost.id = id + 1;
      };
      this.blogService.addBlog(newPost);
      this.topic = '';
      this.message = '';
      this.addPost();
    };
  };
  //button Sign up
  signUp(): void {
    this.signUpWindow = !this.signUpWindow;
    this.resetForm();
  };
  //button submit on sign in window
  signInSubmit(): void {
    this.checkSignIn();
    this.blogService.validateUser(this.email, this.userName);
    if (this.blogService.checkMail && this.addUserStatus)
        {
         this.adminStatus = !this.adminStatus;
         this.signInWindow = !this.signInWindow;
         this.enterStatus = !this.enterStatus;
         this.name = this.blogService.getUserName(this.email); //get user name from service
        } 
    else if (!this.blogService.checkMail && this.addUserStatus) {
      alert('User not exist. Please sign up.');
        };
  };
  //button sign out
  signOut(): void {
    this.enterStatus = !this.enterStatus;
    this.adminStatus = !this.adminStatus;
    this.name = '';
    this.email = '';
  };
  //button submit on sign up window
  signUpSubmit(): void {
    this.check();
    this.blogService.validateUser(this.email,this.userName);
    if (!this.blogService.checkMail && !this.blogService.checkUserName) { //checking if user exists in service
      if (this.addUserStatus) {
        const newUser = {
          id: 1,
          userName: this.userName,
          email: this.email,
          password: this.password
        };
        if (this.newUser.length > 0) { //creates unique id
          const id = this.newUser.slice(-1)[0].id;
          newUser.id = id + 1;
        };
        this.blogService.addUser(newUser);
        this.resetForm();
        this.signUpWindow = !this.signUpWindow;
        this.enterStatus = false;
        this.adminStatus = !this.adminStatus;
        this.name = newUser.userName;
      };
    } else if (this.blogService.checkMail || this.blogService.checkUserName) {
      alert('User with this name or mail already exists. Please sign in.');
    };
  };
  //reset form
  private resetForm() {
    this.topic = '';
    this.message = '';
    this.userName = '';
    this.email = '';
    this.password = '';
  };
  //button edit
  editBlog(blog: IBlog): void {
    this.addPost()
    this.message = blog.message;
    this.topic = blog.topic;
    this.editStatus = true;
    this.editId = blog.id;
    this.editUserName = blog.postedBy
  };
  //button save
  savePost(): void {
   if (this.name === 'Admin'){
      const updatePost = {
        id: this.editId,
        postedBy:this.editUserName,
        topic: this.topic,
        date: new Date(),
        message: this.message
      };
        this.blogService.updateBlog(updatePost, this.editId); //save edited post in service
        this.addPost();
        this.editStatus = false;
   }
   else{ 
       const updatePost = {
         id: this.editId,
         postedBy: this.name,
         topic: this.topic,
         date: new Date(),
         message: this.message
       };
     this.blogService.updateBlog(updatePost, this.editId); //save edited post in service
     this.addPost();
     this.editStatus = false;
   } 
  };

  //button delete
  deleteBlog(blog: IBlog): void {
    this.blogService.deletePost(blog.id); //delete post in service
  };
  // input validation sign up
  getS = (selector: any) => document.querySelector(selector);
  check(): void {
    this.log = this.loginRegExp.test(this.getS('#log').value);
    this.paswd = this.paswdRegExp.test(this.getS('#paswd').value);
    this.em = this.emailRegExp.test(this.getS('#em').value);
    if (this.log && this.paswd && this.em) {
      this.addUserStatus = true;
    } else {
      this.addUserStatus = false;
      alert('Check the entered data')
    };
  };
  // input validation sign in
  checkSignIn(): void {
    this.paswd = this.paswdRegExp.test(this.getS('#paswd').value);
    this.em = this.emailRegExp.test(this.getS('#em').value);
    if (this.paswd && this.em) {
      this.addUserStatus = true;
    } else {
      this.addUserStatus = false;
      alert('Check the entered data')
    };
  };

};