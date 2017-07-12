import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RetrivingObjectComponent, RetrivingListComponent, QueringListsComponent, LoginComponent } from '.';

@NgModule({
  declarations: [
    RetrivingObjectComponent,
    RetrivingListComponent,
    QueringListsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RetrivingObjectComponent,
    RetrivingListComponent,
    QueringListsComponent,
    LoginComponent
  ]
})
export class ComponentsModule { }
