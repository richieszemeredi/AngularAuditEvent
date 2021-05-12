import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateAuditeventComponent } from './create-auditevent/create-auditevent.component';
import { ListAuditeventComponent } from './list-auditevent/list-auditevent.component';
import { EditAuditeventComponent } from './edit-auditevent/edit-auditevent.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-auditevent', pathMatch: 'full' },
  { path: 'create', component: CreateAuditeventComponent },
  { path: 'list-auditevent', component: ListAuditeventComponent },
  { path: 'edit-auditevent/:id', component: EditAuditeventComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
