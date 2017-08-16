import { MdDialogRef } from '@angular/material';
import { DialogService } from './../services/dialog/dialog.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {
  
  public username: string;
  public password: string;

  private teachers: object[];

  constructor(public dialogService: DialogService,
              private mdDialogRef: MdDialogRef<MainLoginComponent>) { }

  ngOnInit() {
  }

  login() {
    this.dialogService.login(this.username, this.password).subscribe((result: Response) => {
      this.teachers = result.json().teachers;
      let response = this.validateUser();
    });
  }

  private validateUser(): void {
      let isTeacher = Boolean(this.teachers.find((teacher: any)=> {
        return teacher.name == this.username && teacher.password == this.password;
      }));
      if (isTeacher) return this.mdDialogRef.close(1);
      return this.mdDialogRef.close(0);
  }

}
