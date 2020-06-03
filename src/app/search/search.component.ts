import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private fb: FormBuilder, public service: DataService) { }

  ngOnInit(): void {

    // add corresponding validators
    this.searchForm = this.fb.group({
      'searchText': ['', Validators.required]
    });

    // write a subsciber/valueChanges function that calls changeSearchText upon value change in the form
    this.searchForm.get('searchText').valueChanges.pipe(distinctUntilChanged()).subscribe(value => {
        this.service.changeSearchText(value);
      }
    );
  }

}
