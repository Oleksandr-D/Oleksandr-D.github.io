import {Injectable} from '@angular/core';
import {IBlog} from 'src/app/interfaces/blog/blogs.interface';
import {IUsers} from 'src/app/interfaces/users/users.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs: Array < IBlog >= [{
    id: 1,
    postedBy: 'Admin',
    topic: 'First post',
    date: new Date(),
    message: 'Sign up to create your account and start to use Angular blog'
  }];
  public users: Array < IUsers > = [{
    id: 1,
    userName: 'Admin',
    email: 'admin@gmail.com',
    password: ''
  }];
  public checkMail = true;
  public checkUserName = true;
  public findName!: IUsers[];

  constructor() {}

  getBlogs(): Array < IBlog > {
    return this.blogs;
  };
  getUsers(): Array < IUsers > {
    return this.users;
  };
  //aded new blog in service blogs: Array 
  addBlog(blog: IBlog): void {
    this.blogs.push(blog);
  };
  // edited post in servise 
  updateBlog(blog: IBlog, id: number): void {
    const index = this.blogs.findIndex(blog => blog.id === id);
    this.blogs.splice(index, 1, blog);
  };
  //checking if user exists
  validateUser(email: string , userName:string): void {
    this.checkMail = this.users.some(user => user.email === email);
    this.checkUserName = this.users.some(userNames => userNames.userName === userName);
  };
  // aded user name from users: Array to app
  getUserName(email: string) {
    this.findName = this.users.filter(user => user.email === email);
    return this.findName[0].userName
  };
  // delete post in servise
  deletePost(id: number): void {
    const index = this.blogs.findIndex(blog => blog.id === id);
    this.blogs.splice(index, 1);
  };
  //aded new users in service users: Array
  addUser(user: IUsers): void {
    this.users.push(user);
  };

};