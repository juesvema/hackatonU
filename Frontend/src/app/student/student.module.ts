import { ProductsService } from './services/products/products.service';
import { DialogService } from './services/dialog/dialog.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoiceProductComponent } from './choice-product/choice-product.component';
import { InformationComponent } from './information/information.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { PresentationComponent } from './presentation/presentation.component';
import { MdTabsModule, 
         MdSelectModule,  
         MdButtonModule, 
         MdButtonToggleModule,
         MaterialModule,
         MdDialog
       } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdTabsModule,
    MdSelectModule,
    MdButtonToggleModule,
    MaterialModule
  ],
  declarations: [ ChoiceProductComponent,
                  InformationComponent, 
                  BitacoraComponent, 
                  PresentationComponent
                ],
  exports: [PresentationComponent],
  providers: [DialogService, ProductsService]
})
export class StudentModule { }
