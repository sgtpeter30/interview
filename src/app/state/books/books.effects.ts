import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { map, catchError, tap, switchMap, withLatestFrom, concatMap } from 'rxjs/operators';
import { LibraryService } from '../../library.service';
import * as BooksActions from '../books/books.actions';
import { AppState } from '../app.state';
import { selectAllBooks } from './books.selectors';


@Injectable({ providedIn: 'root' })
export class BooksEffects{
  //loading book list
  loadBooksList$ = createEffect(()=> this.actions$.pipe(
    ofType(BooksActions.loadBooksTrigger),
    switchMap(()=> 
    from(this.libraryService.getAllBooks()).pipe(
        // map(
        map(
          (books)=> BooksActions.loadBooksListSuccess({books: books}),
          // ()=> BooksActions.refreshBooksList(),
        )
      )
    )
  ))
  // removing book
  removeBook$ = createEffect(()=> this.actions$.pipe(
    ofType(BooksActions.removeBookTrigger),
    withLatestFrom(this.store.select(selectAllBooks)),
    switchMap(([{bookID}])=> 
    from(this.libraryService.removeBook(bookID)).pipe(
        map(
          (books)=> BooksActions.removeBookSuccess(),
        ),
        catchError((error) => of(BooksActions.removeBookError({ error })))
      )
    )
  ))
  // adding book
  addBook$ = createEffect(()=> this.actions$.pipe(
    ofType(BooksActions.addBookTrigger),
    withLatestFrom(this.store.select(selectAllBooks)),
    concatMap(([book])=> 
    from(this.libraryService.postItem({book}.book.book)).pipe(
        map(
          ()=>BooksActions.addBookSuccess(),
        ),
        tap(
          () => window.alert("Added new book")
        ),
        catchError(
          (error) => of(
            BooksActions.addBookError({ error }),
          ),
        )
      )
    )
  ))
  // getBook - server
  getBookByID$ = createEffect(()=> this.actions$.pipe(
    ofType(BooksActions.getBookByID),
    concatMap(({bookID})=> 
    from(this.libraryService.getBook(bookID)).pipe(
        map(
          (books)=> BooksActions.getBookByIDSuccess({book: books}),
        ),
        catchError((error) => of(BooksActions.getBookByIDError({ error })))
      )
    )
  ))
  // getAuthor
  getBookByAuthor$ = createEffect(()=> this.actions$.pipe(
    ofType(BooksActions.getBookByAuthor),
    concatMap(({author})=> 
    from(this.libraryService.getAuthor(author)).pipe(
        map(
          (books)=> BooksActions.getBookByAuthorSuccess({books: books}),
        ),
        catchError((error) => of(BooksActions.getBookByAuthorError({ error })))
      )
    )
  ))
  // refresh books list
  refreshBooksList$ = createEffect(()=> this.actions$.pipe(
    ofType(BooksActions.addBookSuccess, BooksActions.removeBookSuccess),
    switchMap(()=> 
    from(this.libraryService.getAllBooks()).pipe(
        map(
          (books)=> BooksActions.loadBooksListSuccess({books: books}),
        )
      )
    )
  ))

  constructor(
    private actions$: Actions, // this is an RxJS stream of all actions
    private libraryService: LibraryService, // we will need this service for API calls
    private store: Store<AppState>,
    private router: Router
  ) {}
}