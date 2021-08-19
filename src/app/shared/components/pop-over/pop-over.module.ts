import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopOverComponent} from './pop-over.component'


@NgModule({
  declarations: [PopOverComponent,],
  imports: [
    CommonModule
  ],
  exports: [PopOverComponent]
})
export class PopOverModule { }
