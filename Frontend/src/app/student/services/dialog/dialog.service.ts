import { WeekInformationComponent } from './../../week-information/week-information.component';
import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';

@Injectable()
export class DialogService {

  constructor(public dialog: MdDialog) { }

  openDialog() {
      this.dialog.open(WeekInformationComponent);
  }

}
