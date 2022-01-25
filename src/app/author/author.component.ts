import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from '../library.service';
import {Books} from '../Books';
import { NavigationService } from '../navigation.service'

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  constructor(
    private libraryService : LibraryService,
    private route: ActivatedRoute,
    private navigation: NavigationService
  ) { }
  books : Books[] = [];
  columns : any;
  bookAuthor!: string;

  goBack(){
    console.log(this.navigation.showHistory());
    this.navigation.back();
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const bookAuthorFromRoute = routeParams.get('booksAuthor') || '';
    this.bookAuthor = bookAuthorFromRoute;
    
    if(bookAuthorFromRoute !== ''){
      this.libraryService.getAuthor(bookAuthorFromRoute).subscribe
      (
        (response)=>{
          console.log(response);
          if(response.length !== 0){
            this.books = response;
            this.columns = Object.getOwnPropertyNames(this.books[0]);
          }else{
            this.bookAuthor = "No author"
          }
          
          console.log(this.columns);
        },
        (error)=>{
          console.log("error: "+error);
        }
      )
    }else{
      this.bookAuthor = "No author"
    }
  }

}
