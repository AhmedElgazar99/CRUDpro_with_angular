import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Post } from '../Model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl="https://jsonplaceholder.typicode.com";
  

  httpoptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

  constructor(private httpClient:HttpClient) { }

  //getall posts
  getAll():Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.apiUrl+'/posts/').

    pipe(catchError(this.errorHandler))
  }

//create post 
create(post:Post):Observable<any>{
  return this.httpClient.post(this.apiUrl+'/posts/',JSON.stringify(post),this.httpoptions)
  .pipe(catchError(this.errorHandler))
}

//find post by id
find(id:number):Observable<any>{
  return this.httpClient.get(this.apiUrl+'/posts/'+id,this.httpoptions)
  .pipe(catchError(this.errorHandler))
}

//update post
update(id:number,post:Post):Observable<any>{
  return this.httpClient.put(this.apiUrl+'/posts/'+id,JSON.stringify(post),this.httpoptions)
  .pipe(catchError(this.errorHandler))
}

//delete post
delete(id:number){
  return this.httpClient.delete(this.apiUrl+'/posts/'+id,this.httpoptions)
  .pipe(catchError(this.errorHandler))
}
}
