import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'; 
import { ListAuditeventComponent } from './list-auditevent.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule }from '@angular/material/paginator';



@NgModule({
  declarations: [ListAuditeventComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [ListAuditeventComponent]
})
export class ListAuditeventModule { }
