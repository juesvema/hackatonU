import { DialogService } from './../services/dialog/dialog.service';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-entry-login',
  templateUrl: './entry-login.component.html',
  styleUrls: ['./entry-login.component.css']
})
export class EntryLoginComponent implements OnInit {

  @Output() userUpdated = new EventEmitter();

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
        this.userUpdated.emit(true);
      } else {
        this.mainModal();
      }
    });
  }

}
