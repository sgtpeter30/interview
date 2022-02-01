import { BOOK_STATE_NAME } from './books/books.selectors';
import { BooksState } from './books/bookState';
import { booksReducer } from './books/books.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface AppState {
  [BOOK_STATE_NAME]: BooksState;
  router: RouterReducerState;
}

export const appReducer = {
  [BOOK_STATE_NAME]: booksReducer,
  router: routerReducer,
};