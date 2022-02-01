import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Book } from './Book.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  constructor(private http: HttpClient) { }
  url : string = "http://localhost:3000/Books";

  // getAllBooks(): Observable<Book[]> {
  //   return this.http.get<Book[]>(this.url);
  // }
  // done in NgRX
  getAllBooks(){
    return this.http.get<Book[]>(this.url);
  }
  // getGroup(attrValue: any, attrName: string){
  //   let queryParams = new HttpParams();
  //   queryParams = queryParams.append(attrName, attrValue);
  //   return this.http.get<Book[]>(this.url, {params: queryParams});
  // }
  // done in NgRX
  getBook(book: any){
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', book);
    return this.http.get<Book[]>(this.url, {params: queryParams});
  }
  // done in NgRX
  getAuthor(author: string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("author", author);
    return this.http.get<Book[]>(this.url, {params: queryParams});
  }
  // todo - test put item
  putItem(data : object){
    return this.http.put<Book[]>(this.url, {params: data});
  }
  // done in NgRX
  postItem(data: any){
    console.log("data");
    console.log(data.book);
    return this.http.post<Book[]>(this.url, data);
  }
  // done in NgRX
  removeBook(bookID: number){
    return this.http.delete<Book[]>(this.url+'/'+bookID);
  }
}
