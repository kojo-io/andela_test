import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private searchTextSource = new BehaviorSubject<string>('');
  currentSearchText = this.searchTextSource.asObservable();

  constructor() { }

  changeSearchText(searchText: any) {
    // add data to an observable
    this.searchTextSource.next(searchText);
  }
}
