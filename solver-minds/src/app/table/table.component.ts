import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  elements: any = [];
  headElements = ['Id', 'Name', 'Email', 'Phone'];

  constructor(http: HttpClient, private spinner: NgxSpinnerService) {
    http.get('https://jsonplaceholder.typicode.com/users').subscribe(response => {
      this.elements = response;
    }),
      setTimeout(() => {
      }, 100);
}

ngOnInit() {
  this.spinner.show();
  setTimeout(() => {
    this.spinner.hide();
  }, 5000);
}
}
