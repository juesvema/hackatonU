import { MainLoginComponent } from './../../main-login/main-login.component';
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
  openDialog() {
    let configuration: MdDialogConfig = this.getDefaultMdDialogConfig();
    return this.dialog.open(MainLoginComponent, configuration);
  }

  /**
   * 
   * @param week 
   * set default configuration of MdDialogConfig
   */
  getDefaultMdDialogConfig() {
    let configuration: MdDialogConfig = new MdDialogConfig;
    configuration.width = '400px';
    return configuration;
  }

}
