import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDialogBoxComponent } from './custom-dialog-box.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    CustomDialogBoxComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CustomDialogBoxModule { }
