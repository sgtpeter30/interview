import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
// for debug - START
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment
// for debug - START
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
import { BooksEffects } from './state/books/books.effects'
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './state/app.state';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    FormComponent,
    AuthorComponent,
    DetailsComponent,
    HistoryComponent,
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
    StoreModule.forRoot(appReducer),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: ['Home']},
      { path: 'table', component: TableComponent , data: ['Book list']},
      { path: 'form', component: FormComponent , data: ['Book edit form']},
      { path: 'details/:booksID', component: DetailsComponent, data: ['Book details'] },
      { path: 'author/:booksAuthor', component: AuthorComponent, data: ['Book author: ']},
    ]),
    EffectsModule.forRoot([BooksEffects]),
    StoreRouterConnectingModule.forRoot({}),
    
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
