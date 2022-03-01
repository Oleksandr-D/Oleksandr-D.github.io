import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IBlogRequest,IBlogResponse} from 'src/app/interfaces/lesson07/lesson07.interface';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Lesson07servService {
  private url = environment.BACKEND_URL;
  private api = {
    blogs: `${this.url}/posts`
  };
  constructor(private http: HttpClient) {}
  //get data from
  getAll(): Observable < IBlogResponse[] > {
    return this.http.get < IBlogResponse[] > (this.api.blogs);
  };
  //create and post 
  create(post: IBlogRequest): Observable < IBlogResponse > {
    return this.http.post < IBlogResponse > (this.api.blogs, post);
  };
  //delete post
  delete(id: number): Observable < void > {
    return this.http.delete < void > (`${this.api.blogs}/${id}`);
  };
  //edit post button save
  editPost(post: IBlogRequest, id: number): Observable < IBlogResponse > {
    return this.http.patch < IBlogResponse > (`${this.api.blogs}/${id}`, post);
  };

};