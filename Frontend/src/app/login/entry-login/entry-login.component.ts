import { DialogService } from './../services/dialog/dialog.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-entry-login',
  templateUrl: './entry-login.component.html',
  styleUrls: ['./entry-login.component.css']
})
export class EntryLoginComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    this.mainModal();
  }

  /**
   * call main-login by modal
   */
  public mainModal(){
    this.dialogService.openDialog().afterClosed().subscribe( (result: any) => {
      if (result) {
        
      } else {
        this.mainModal();
      }
    });
  }

}
