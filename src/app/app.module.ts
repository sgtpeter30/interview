import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import {EditorModule} from 'primeng/editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { AuthorComponent } from './author/author.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    FormComponent,
    AuthorComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DataViewModule,
    InputTextareaModule,
    InputTextModule,
    InputNumberModule,
    EditorModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'table', component: TableComponent},
      { path: 'form', component: FormComponent},
      { path: 'details/:booksID', component: DetailsComponent },
      { path: 'author/:booksAuthor', component: AuthorComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
