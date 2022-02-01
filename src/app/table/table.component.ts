import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {removeBookTrigger, loadBooksTrigger} from '../state/books/books.actions'
import { selectAllBooks }  from '../state/books/books.selectors'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public books$ = this.store.select(selectAllBooks);
  constructor(
    private store: Store,
  ) {}
  columns = [
    { colTitle: 'ID' },
    { colTitle: 'Title' },
    { colTitle: 'Author' },
    { colTitle: 'Action' }
  ];
  removeBook(bookID: number) {
    this.store.dispatch(removeBookTrigger({bookID}));
  }

  ngOnInit() {
    this.store.dispatch(loadBooksTrigger());
  }
}