import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-data-sharing',
  templateUrl: './data-sharing.component.html',
  styleUrls: ['./data-sharing.component.css']
})
export class DataSharingComponent implements OnInit {
  name = 'Angular';
  parent = 10;
  parentCount = 0;

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 100);
  }

  displayCounter(count: any){
    this.parentCount = count;
  }

}
