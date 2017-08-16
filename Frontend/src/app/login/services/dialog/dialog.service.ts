import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { MainLoginComponent } from './../../main-login/main-login.component';
import { Injectable } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';

@Injectable()
export class DialogService {

   private teachers: object[];
   private students: object[];

  /**
   * 
   * @param dialog MdDialog to open components in dialog
   */
  constructor(public dialog: MdDialog,
              public http: Http) { }

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

  public login( username:string, password: string ) {
    return this.http.get('assets/teachersStudents.json');
  }
}
