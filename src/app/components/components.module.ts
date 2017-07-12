import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RetrivingObjectComponent, RetrivingListComponent } from '.';

@NgModule({
  declarations: [
    RetrivingObjectComponent,
    RetrivingListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RetrivingObjectComponent,
    RetrivingListComponent
  ]
})
export class ComponentsModule { }
