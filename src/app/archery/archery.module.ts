import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArcheryRoutingModule } from './archery-routing.module';
import { ArcheryComponent } from './archery.component';


@NgModule({
  declarations: [
    ArcheryComponent
  ],
  imports: [
    CommonModule,
    ArcheryRoutingModule
  ]
})
export class ArcheryModule { }
