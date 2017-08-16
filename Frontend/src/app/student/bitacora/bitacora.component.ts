import { DialogService } from './../services/dialog/dialog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent implements OnInit {

  /**
   * weeks
   */
  private weeks: number[];

  constructor(public dialogService: DialogService) { }

  ngOnInit() {
    this.fillWeeks();
  }

  /**
   * fill weeks var
   */
  private fillWeeks() {
    this.weeks = [];
    for (let i = 0; i< 16; i++) {
      this.weeks.push(i + 1);
    }
  }

  /**
   * go to week
   */
  public goWeek(week: number) {
    this.dialogService.openDialog(week);
  }

}
