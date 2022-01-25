import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Books } from './Books';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  constructor(private http: HttpClient) { }
  url : string = "http://localhost:3000/books";

  getAllBooks(){
    return this.http.get<Books[]>(this.url);
  }
  getGroup(attrValue: any, attrName: string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append(attrName, attrValue);
    return this.http.get<Books[]>(this.url, {params: queryParams});
  }
  getBook(book: any){
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', book);
    return this.http.get<Books[]>(this.url, {params: queryParams});
  }
  getAuthor(author: string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("author", author);
    return this.http.get<Books[]>(this.url, {params: queryParams});
  }
  // todo - test put item
  putItem(data : object){
    return this.http.put<Books[]>(this.url, {params: data});
  }
  
  postItem(data: object){
    return this.http.post<Books[]>(this.url, data);
  }

  removeBook(bookID: number){
    return this.http.delete<Books[]>(this.url+'/'+bookID);
  }
}
