import { ChoiceProductComponent } from './student/choice-product/choice-product.component';
import { InformationComponent } from './student/information/information.component';
import { PresentationComponent } from './student/presentation/presentation.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdTabsModule, MdCardModule, MdGridListModule } from '@angular/material';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    InformationComponent,
    ChoiceProductComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdTabsModule,
    MdCardModule,
    MdGridListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
