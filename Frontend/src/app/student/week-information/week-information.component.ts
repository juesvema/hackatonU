import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-information',
  templateUrl: './week-information.component.html',
  styleUrls: ['./week-information.component.css']
})
export class WeekInformationComponent implements OnInit {
  _checked = 0;
  _indeterminate = 1;  

  constructor() { }

  ngOnInit() {
  }

  

}
