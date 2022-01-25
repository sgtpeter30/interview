import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from '../library.service';
import {Books} from '../Books';
import { NavigationService } from '../navigation.service'
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private libraryService : LibraryService,
    private route: ActivatedRoute,
    private navigation: NavigationService
    ) {}
  books : Books[] = [];
  columns : any;
  goBack(){
    console.log(NavigationEnd);
    console.log(this.navigation.showHistory());
    this.navigation.back();
  }
  ngOnInit() {
    console.log(this.route);
    const routeParams = this.route.snapshot.paramMap;
    const bookIdFromRoute = Number(routeParams.get('booksID'));

    this.libraryService.getBook(bookIdFromRoute).subscribe
    (
      (response)=>{
        this.books = response;
        this.columns = Object.getOwnPropertyNames(this.books[0]);
        // console.log(Object.getOwnPropertyNames(response[0]));
        console.log(this.columns);
      },
      (error)=>{
        console.log("error: "+error);
      }
    )
  }

}
