import { DialogService } from './services/dialog/dialog.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryLoginComponent } from './entry-login/entry-login.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { MdButtonModule, MdButtonToggleModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdButtonToggleModule
  ],
  providers: [ DialogService ],
  exports: [ EntryLoginComponent ],
  declarations: [EntryLoginComponent]
})
export class LoginModule { }
