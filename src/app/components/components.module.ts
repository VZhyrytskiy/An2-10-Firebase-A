import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RetrivingObjectComponent, RetrivingListComponent, QueringListsComponent } from '.';

@NgModule({
  declarations: [
    RetrivingObjectComponent,
    RetrivingListComponent,
    QueringListsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RetrivingObjectComponent,
    RetrivingListComponent,
    QueringListsComponent
  ]
})
export class ComponentsModule { }
