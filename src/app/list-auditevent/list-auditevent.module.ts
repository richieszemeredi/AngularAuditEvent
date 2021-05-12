import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'; 
import { ListAuditeventComponent } from './list-auditevent.component';


@NgModule({
  declarations: [ListAuditeventComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [ListAuditeventComponent]
})
export class ListAuditeventModule { }
