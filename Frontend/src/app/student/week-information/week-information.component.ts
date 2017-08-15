import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-week-information',
  templateUrl: './week-information.component.html',
  styleUrls: ['./week-information.component.css']
})
export class WeekInformationComponent implements OnInit {
  
  private week: number;

  /**
  *  check of days and activities
  */
  public mondayRiego: boolean;
  public mondayDesmalezado: boolean;
  public mondayAbono: boolean;

  public tuesdayRiego: boolean;
  public tuesdayDesmalezado: boolean;
  public tuesdayAbono: boolean;

  public wednesdayRiego: boolean;
  public wednesdayDesmalezado: boolean;
  public wednesdayAbono: boolean;

  public thursdayRiego: boolean;
  public thursdayDesmalezado: boolean;
  public thursdayAbono: boolean;

  public fridayRiego: boolean;
  public fridayDesmalezado: boolean;
  public fridayAbono: boolean;

  constructor(@Inject(MD_DIALOG_DATA) private data: number) {}

  ngOnInit() {
    this.week = this.data;
    this.fillChecks();
  }

  /**
   * initialize checks
   */
  private fillChecks() {
    this.mondayRiego = false;
    this.mondayDesmalezado = false;
    this.mondayAbono = false;

    this.tuesdayRiego = false;
    this.tuesdayDesmalezado = false;
    this.tuesdayAbono = false;

    this.wednesdayRiego = false;
    this.wednesdayDesmalezado = false;
    this.wednesdayAbono = false;

    this.thursdayRiego = false;
    this.thursdayDesmalezado = false;
    this.thursdayAbono = false;

    this.fridayRiego = false;
    this.fridayDesmalezado = false;
    this.fridayAbono = false;
  }
}
