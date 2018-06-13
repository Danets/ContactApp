import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactResolver } from './contact.resolver';

import { HomeComponent } from '../components/home/home.component';
import { ContactListComponent } from '../components/contact-list/contact-list.component';
import { ContactDetailComponent } from '../components/contact-detail/contact-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, resolve: { message: ContactResolver } },
  { path: 'contacts', component: ContactListComponent },
  { path: 'detail/:id', component: ContactDetailComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
