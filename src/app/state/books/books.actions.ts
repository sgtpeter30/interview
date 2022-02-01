import { createAction, props } from '@ngrx/store';
import { Book } from '../../Book.model';

// load books form API
export const loadBooksTrigger = createAction(
  '[Books] Load books list'
);
export const loadBooksListSuccess = createAction(
  '[Books] Load books list success',
  props<{books: Book[] }>()
);
export const loadBooksListError = createAction(
  '[Books] Load books list fail',
  props<{error: string }>()
);
// getBooks
export const getBooks = createAction(
  '[Books] Get books from state'
);
// get Books by ID
export const getBookByID = createAction(
  '[Books] Get book by ID',
  props<{ bookID: number }>()
);
export const getBookByIDSuccess = createAction(
  '[Books] Get book by ID Success',
  props<{book: Book[] }>()
);
export const getBookByIDError = createAction(
  '[Books] Get book by ID failed',
  props<{error: string }>()
);
// get Books by Author
export const getBookByAuthor = createAction(
  '[Books] Get books by Author',
  props<{author: string }>()
);
export const getBookByAuthorSuccess = createAction(
  '[Books] Get books by Author Success',
  props<{books: Book[] }>()
);
export const getBookByAuthorError = createAction(
  '[Books] Get books by Author failed',
  props<{error: string }>()
);
// Removing book
export const removeBookTrigger = createAction(
  '[Books] Remove Book',
  props<{ bookID: number }>()
);
export const removeBookSuccess = createAction(
  '[Books] Remove Book successed',
);
export const removeBookError = createAction(
  '[Books] Remove Book failed',
  props<{error: string }>()
);
// Adding book
export const addBookTrigger = createAction(
  '[Books] Add Book trigger',
  props<{ book: Book[] }>()
);
export const addBookSuccess = createAction(
  '[Books] Add Book successed',
);
export const addBookError = createAction(
  '[Books] Add Book failed',
  props<{error: string }>()
);
// get latest ID
export const getLatestID = createAction(
  '[Books] Get latest ID',
);
// refreshBookList
export const refreshBooksList = createAction(
  '[Books] Refresh books list',
)