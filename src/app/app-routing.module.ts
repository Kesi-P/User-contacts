import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'add-contacts', component: AddContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
