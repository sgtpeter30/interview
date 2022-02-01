import { createReducer, on } from '@ngrx/store';
import * as BooksActions from './books.actions';
import { initialState } from './bookState';

export const _booksReducer = createReducer(
  initialState,
  // Load book list
  on(BooksActions.loadBooksTrigger, (state) => ({ ...state, status: 'loading'})), 
  on(BooksActions.loadBooksListSuccess, (state, { books }) => ({
    ...state,
    books: books,
    bookID: Math.max(...state.books.map(o => o.id), 0),
    // bookID: 20,
    error: null,
    status: 'success'
  })),
  on(BooksActions.loadBooksListError, (state, {error})=>({
    ...state,
    error: error,
    status: 'error'
  })),
  // refresh book list
  on(BooksActions.refreshBooksList, (state) => ({
    ...state,
    error: null,
    status: 'pending'
  })),
  // get books from state
  on(BooksActions.getBooks, (state) => ({
    ...state,
    error: null,
    status: 'success'
  })),
  // getSingle Book
  on(BooksActions.getBookByID, (state, {bookID}) => ({
    ...state,
    bookID: bookID,
    error: null,
    status: 'success'
  })),
  on(BooksActions.getBookByIDSuccess, (state, {book}) => ({
    ...state,
    book: book,
    error: null,
    status: 'success'
  })),
  on(BooksActions.getBookByIDError, (state, {error})=>({
    ...state,
    error: error,
    status: 'error'
  })),
  // get Books by Author
  on(BooksActions.getBookByAuthor, (state) => ({
    ...state,
    error: null,
    status: 'success'
  })),
  on(BooksActions.getBookByAuthorSuccess, (state, {books}) => ({
    ...state,
    booksGroup: books,
    error: null,
    status: 'success'
  })),
  on(BooksActions.getBookByAuthorError, (state, {error})=>({
    ...state,
    error: error,
    status: 'error'
  })),
  // RemoveBook
  on(BooksActions.removeBookTrigger, (state) => ({ 
    ...state,
    error: null,
    status: 'pending',
  })),
  on(BooksActions.removeBookSuccess, (state) => ({
    ...state,
    error: null,
    status: 'success'
  })),
  on(BooksActions.removeBookError, (state, {error})=>({
    ...state,
    error: error,
    status: 'error'
  })),
  // Add book
  on(BooksActions.addBookTrigger, (state) => ({ 
    ...state,
    error: null,
    status: 'pending',
  })),
  on(BooksActions.addBookSuccess, (state) => ({
    ...state,
    error: null,
    status: 'success'
  })),
  on(BooksActions.addBookError, (state, {error})=>({
    ...state,
    error: error,
    status: 'error'
  })),
  // get last ID
  on(BooksActions.getLatestID, (state) => ({
    ...state,
    // bookID: state.bookID,
    bookID: Math.max(...state.books.map(o => o.id), 0),
    error: null,
    status: 'success'
  })),
)
export function booksReducer(state, action) {
  return _booksReducer(state, action);
}