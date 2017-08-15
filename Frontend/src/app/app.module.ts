import { WeekInformationComponent } from './student/week-information/week-information.component';
import { StudentModule } from './student/student.module';
import { BitacoraComponent } from './student/bitacora/bitacora.component';
import { ChoiceProductComponent } from './student/choice-product/choice-product.component';
import { InformationComponent } from './student/information/information.component';
import { PresentationComponent } from './student/presentation/presentation.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdTabsModule, 
         MdCardModule, 
         MdGridListModule, 
         MdInputModule,
         MdCheckboxModule
        } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    WeekInformationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    StudentModule,
    MdTabsModule,
    MdCardModule,
    MdGridListModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdCheckboxModule
  ],
  providers: [],
  entryComponents: [WeekInformationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
