import { Component, OnInit } from '@angular/core';

import { LibraryService } from '../library.service';
import {Books} from '../Books';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private libraryService : LibraryService) {}

  columns = [
    {colTitle: 'ID'},
    {colTitle: 'Title'},
    {colTitle: 'Author'},
    {colTitle: 'Action'}
  ];


  books : Books[] = [];
  removeBook(bookID: number){
    console.log(bookID);
    console.log("remove - start");
    this.libraryService.removeBook(bookID).subscribe(
      // I wanted to base refresh either on returning removed item ID, or returning object books, but it needed modification in JSON server
      (result)=>{
        this.libraryService.getAllBooks().subscribe
        (
          (response)=>{
            this.books = response;
          },
          (error)=>{
            console.log("error: "+error);
          }
        )
      },
      (error) => {
        console.error('There was an error!', error);
      }
    )
  }

  ngOnInit(): void {
    this.libraryService.getAllBooks().subscribe
    (
      (response)=>{
        this.books = response;
      },
      (error)=>{
        console.log("error: "+error);
      }
    )
  }

}
