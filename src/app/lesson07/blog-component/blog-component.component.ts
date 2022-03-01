import {Component,OnInit} from '@angular/core';
import {IBlogResponse} from 'src/app/interfaces/lesson07/lesson07.interface';
import {Lesson07servService} from 'src/app/shared/services/lesson07/lesson07serv.service';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.scss']
})
export class BlogComponentComponent implements OnInit {
  public userPost: IBlogResponse[] = [];
  constructor(
    private Lesson07servService: Lesson07servService
  ) {}

  ngOnInit(): void {
    this.getBlogs()
  }
  //get data from servise
  getBlogs(): void {
    this.Lesson07servService.getAll().subscribe(data => {
      this.userPost = data;
    })
  }
}