import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  customers = [
    { name: 'Jeremy Clarke', age: 21, id: 12345, gender: 'Male', location: 'Melbourne', income: '$120,000' },
    { name: 'Matty Bing', age: 25, id: 12225, gender: 'Female', location: 'Toronto', income: '$950,000' },
    { name: 'Tanya Smith', age: 18, id: 12455, gender: 'Female', location: 'New York City', income: '$150,000' },
    { name: 'Sparsh Saxena', age: 25, id: 13345, gender: 'Male', location: 'Philadephia', income: '$200,000' },
    { name: 'Adam Gilly', age: 32, id: 12344, gender: 'Male', location: 'Melbourne', income: '$2,200,000' },
    { name: 'Glenn Adams', age: 34, id: 12395, gender: 'Male', location: 'Adelaide', income: '$4,200,000' },
    { name: 'Stuart McGill', age: 32, id: 19945, gender: 'Male', location: 'Arlington', income: '$400,000' },
    { name: 'Erica Edwards', age: 25, id: 11145, gender: 'Female', location: 'Toronto', income: '$2,200,000' }
  ];

  searchCustomersList = {};
  constructor(private service: DataService) { }

  ngOnInit(): void {
    // complete this function which searches the customer data & adds them to searchCustomersList
    // this.myData = this.customers;
    this.service.currentSearchText.subscribe((searchTerm) => {
      if (searchTerm) {
        this.searchCustomersList = this.customers.filter(v => {
            let match = false;
            Object.keys(v).forEach(p => {
              if (typeof v[p] === 'string') {
                match = match || v[p].toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
              } else {
                match = match || v[p].toString().toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
              }
            });
            return match;
          }
        );
      } else {
        this.searchCustomersList = this.customers;
        return false;
      }
    });
  }

}
