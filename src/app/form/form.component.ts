import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from '../library.service';
import { NavigationService } from '../navigation.service'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  submitted = false;
  bookForm!: FormGroup;
  formType: string | undefined;
  
  constructor(
    private libraryService : LibraryService,
    private route: ActivatedRoute,
    private navigation: NavigationService
  ) {}
  // todo add possibility to edit data
  sendForm(formType: string){
    if (this.bookForm.valid) {
      let data = this.bookForm.value
      // POST
      this.libraryService.postItem(data).subscribe
      (
        (response)=>{
          console.log(response);
          console.log("added book");
        },
        (error)=>{
          console.log("error: "+error);
        }
      )

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
    const routeParams = this.route.snapshot.paramMap;
    const bookIDFromRoute = Number(routeParams.get('booksID'));
    // todo add get last occupied ID and put it as default
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
  goBack(){
    this.navigation.back();
  }
}