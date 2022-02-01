import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../Book.model';
import { getBookByID } from '../state/books/books.actions'
import { selectBookByID } from '../state/books/books.selectors';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public books$ = this.store.select(selectBookByID);

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) { }
  books: Book[] = [];
  columns = [
    { colTitle: 'ID' },
    { colTitle: 'Title' },
    { colTitle: 'Author' },
    { colTitle: 'Action' }
  ];
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const bookIdFromRoute = Number(routeParams.get('booksID'));
    this.store.dispatch(getBookByID({ bookID: bookIdFromRoute }));
  }
}
