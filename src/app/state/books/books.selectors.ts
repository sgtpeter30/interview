import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state'
import { BooksState } from './bookState';
// import { BooksState } from './books.reducer';
export const BOOK_STATE_NAME = 'Book';

const getBookState = createFeatureSelector<BooksState>(BOOK_STATE_NAME);

// export const selectBooks = (state: AppState) => state.books;
// export const selectBookByAuthor = (state: AppState) => state.books;
// export const selectAllBooks = createSelector(
//   getBookState,
//   (state: BooksState) => state.books
// )
export const selectAllBooks = createSelector(getBookState, (state)=>{
  return state.books
})
export const selectBookByID = createSelector(
  getBookState,
  (state: BooksState) => state.book
)
export const selectBooksByAuthor = createSelector(
  getBookState,
  (state: BooksState) => state.booksGroup
)
export const selectLatestID = createSelector(
  getBookState,
  (state: BooksState) => state.bookID
)
