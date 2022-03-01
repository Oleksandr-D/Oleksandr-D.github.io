import {Component,OnInit} from '@angular/core';
import {IBlogRequest,IBlogResponse} from 'src/app/interfaces/lesson07/lesson07.interface';
import {Lesson07servService} from 'src/app/shared/services/lesson07/lesson07serv.service';
@Component({
  selector: 'app-admin-blog-component',
  templateUrl: './admin-blog-component.component.html',
  styleUrls: ['./admin-blog-component.component.scss']
})
export class AdminBlogComponentComponent implements OnInit {
  public adminPost: IBlogResponse[] = [];
  public title!: string;
  public text!: string;
  public autor!: string;
  public editStatus = false;
  public editID!: number;

  constructor(
    private Lesson07servService: Lesson07servService
  ) {}

  ngOnInit(): void {
    this.getBlogs();
  }
  //get data
  getBlogs(): void {
    this.Lesson07servService.getAll().subscribe(data => {
      this.adminPost = data;
    })
  }
  //button add. created new post
  addPost(): void {
    if (this.adminPost.length < 3) {
      const newPost = {
        title: this.title,
        text: this.text,
        autor: this.autor
      }
      this.Lesson07servService.create(newPost).subscribe((): void => {
        this.getBlogs();
        this.resetForm();
      })
    }
  }
  //button delete
  deletePost(post: IBlogResponse): void {
    if (confirm('Are you shure?')) {
      this.Lesson07servService.delete(post.id).subscribe(() => {
        this.getBlogs()
      });
    }
  }
  //button edit Post
  editPost(post: IBlogResponse): void {
    this.title = post.title;
    this.text = post.text;
    this.autor = post.autor;
    this.editStatus = true;
    this.editID = post.id;
  }
  //save button
  save(): void {
    const updatePost = {
      title: this.title,
      text: this.text,
      autor: this.autor
    };
    this.Lesson07servService.editPost(updatePost, this.editID).subscribe(() => {
      this.getBlogs();
      this.resetForm();
      this.editStatus = false;
    })
  }
  //clear form
  resetForm() {
    this.title = '';
    this.text = '';
    this.autor = '';
  }
}