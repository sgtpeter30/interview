import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {getSelectors } from '@ngrx/router-store';
import {mergeWith, pipe} from 'rxjs';
import { NavigationService } from '../navigation.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  
  public currentURL$ = this.store.select(getSelectors().selectUrl);
  public currentURLName$ = this.store.select(getSelectors().selectRouteData);
  public currentURLParams$ = this.store.select(getSelectors().selectRouteParams);

  array$ = [];
  arrayPart$ = [];
  currentHome$ = true;

  constructor(
    public store: Store,
    private navigation: NavigationService,
  ) 
  {
    this.currentURL$.pipe(
      mergeWith(this.currentURLName$, this.currentURLParams$),
    ).subscribe(
      pipe(
        (data) => {
          if(data !== undefined){
            if(typeof data === 'string' ){
              data = decodeURI(data);
            }
            this.arrayPart$.push(data)
          }
        },
        ()=>{
          if(Number.isInteger(this.arrayPart$.length/3) && this.arrayPart$.length > 0){
            if(this.array$.length === 15){
              this.array$.shift()
            }
            this.array$.push(this.arrayPart$)
            if(this.arrayPart$[0] === '/'){
              this.currentHome$ = false;
            }else{
              this.currentHome$ = true;
            }
            this.arrayPart$ = [];
          }
        },
      )
    )
  }
  goBack(){
    this.navigation.back();
  }
  async ngOnInit() {}
}