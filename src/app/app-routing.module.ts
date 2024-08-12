import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AuthGuard } from './guards/auth.guard';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { EditComponentReactiveFormComponentComponent } from './edit-component-reactive-form-component/edit-component-reactive-form-component.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate : [AuthGuard]},
  {path: 'about', component :AboutComponent, canActivate : [AuthGuard]},
  {path: 'contacts', component : ContactsComponent, canActivate : [AuthGuard]},
  {path: 'contacts/edit/:id', component : EditContactComponent, canActivate : [AuthGuard]},
  {path: 'contacts/edit-reactive-form', component : EditComponentReactiveFormComponentComponent, canActivate : [AuthGuard]},
  {path: 'contacts/:id', component : ContactDetailComponent, canActivate : [AuthGuard]},
  {path: 'signin', component : SigninComponent},
  //{path : '', redirectTo : '/about' , pathMatch :'full'}  --> As soon as the app work it is open on about component
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
