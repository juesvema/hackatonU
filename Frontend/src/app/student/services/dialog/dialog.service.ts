import { WeekInformationComponent } from './../../week-information/week-information.component';
import { Injectable } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';

@Injectable()
export class DialogService {

  constructor(public dialog: MdDialog) { }

  openDialog() {
    let configuration: MdDialogConfig = new MdDialogConfig;
    configuration.width = '600px';
      this.dialog.open(WeekInformationComponent, configuration);
  }

}
