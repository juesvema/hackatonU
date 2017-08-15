import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoiceProductComponent } from './choice-product/choice-product.component';
import { InformationComponent } from './information/information.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { PresentationComponent } from './presentation/presentation.component';
import { MdTabsModule}  from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdTabsModule
  ],
  declarations: [ChoiceProductComponent, InformationComponent, BitacoraComponent, PresentationComponent],
  exports: [PresentationComponent]
})
export class StudentModule { }
