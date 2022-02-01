import { Book } from '../../Book.model';
export interface BooksState {
  books: Book[];
  book: Book[];
  booksGroup: Book[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
  bookID: number;
  // router: RouterReducerState<any>;
}
export const initialState: BooksState = {
  books: [],
  book: [],
  booksGroup: [],
  error: null,
  status: 'pending',
  bookID: null,
};