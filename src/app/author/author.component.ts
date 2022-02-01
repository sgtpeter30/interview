import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getBookByAuthor } from '../state/books/books.actions'
import { Store } from '@ngrx/store';
import { selectBooksByAuthor } from '../state/books/books.selectors';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  public books$ = this.store.select(selectBooksByAuthor);

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) { }
  bookAuthor!: string;
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const bookAuthorFromRoute = routeParams.get('booksAuthor') || '';
    this.bookAuthor = bookAuthorFromRoute;
    
    if(bookAuthorFromRoute !== ''){
      this.store.dispatch(getBookByAuthor({author : bookAuthorFromRoute}));
    }else{
      this.bookAuthor = "No author"
    }
  }
}
