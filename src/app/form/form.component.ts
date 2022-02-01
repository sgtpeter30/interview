import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../navigation.service'
import { Store } from '@ngrx/store';
import * as BooksActions from '../state/books/books.actions'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit  {
  // todo ID hint
  // public latestID$ = this.store.select(selectLatestID).subscribe(latestID => this.latestID$ = latestID);
  submitted = false;
  bookForm!: FormGroup;
  formType: string | undefined;
  
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private navigation: NavigationService
  ) {}
  // todo add possibility to edit data
  // sending data
  sendForm(formType: string){
    if (this.bookForm.valid) {
      const book = this.bookForm.value
      // POST
      this.store.dispatch(BooksActions.addBookTrigger({book: book}));
    }else{
      this.bookForm
      Object.keys(this.bookForm.controls).forEach(field => {
        const control = this.bookForm.get(field);  
        console.log(control);
        control!.markAsTouched({ onlySelf: true }); 
      });
    }
  }
    ngOnInit(): void {
    this.store.dispatch(BooksActions.loadBooksTrigger());
    // todo put item

    this.bookForm = new FormGroup({
      id : new FormControl(null, Validators.required) ,
      title: new FormControl('', [Validators.required, Validators.minLength(7)]),
      author: new FormControl('', Validators.required),
      description : new FormControl(),
      img: new FormControl(),
    })
    // TEST DATA for quicker post
    // this.bookForm = new FormGroup({
    //   id : new FormControl(100, Validators.required) ,
    //   title: new FormControl('testowo', [Validators.required, Validators.minLength(7)]),
    //   author: new FormControl('test', Validators.required),
    //   description : new FormControl(),
    //   img: new FormControl(),
    // })
  }
  get id() {
    return this.bookForm.get('id');
  }
  get title() {
    return this.bookForm.get('title');
  }
  get author() {
    return this.bookForm.get('author');
  }
}