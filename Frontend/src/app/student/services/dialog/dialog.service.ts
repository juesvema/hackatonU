import { WeekInformationComponent } from './../../week-information/week-information.component';
import { Injectable } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';

@Injectable()
export class DialogService {

  /**
   * 
   * @param dialog MdDialog to open components in dialog
   */
  constructor(public dialog: MdDialog) { }

  /**
   * 
   * @param week 
   * open dialog with week number
   */
  openDialog(week: number) {
    let configuration: MdDialogConfig = this.getDefaultMdDialogConfig( week );
    this.dialog.open(WeekInformationComponent, configuration);
  }

  /**
   * 
   * @param week 
   * set default configuration of MdDialogConfig
   */
  getDefaultMdDialogConfig( week: number ) {
    let configuration: MdDialogConfig = new MdDialogConfig;
    configuration.width = '800px';
    configuration.data = week;
    return configuration;
  }

}
