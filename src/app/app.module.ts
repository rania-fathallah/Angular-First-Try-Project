import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetCharPipe } from './pipes/get-char.pipe';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AboutService } from './services/about.service';
import { ContactService } from './services/contact.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { EditComponentReactiveFormComponentComponent } from './edit-component-reactive-form-component/edit-component-reactive-form-component.component';
import { BaseURL } from './shared/baseurl';
import { HttpClientModule} from '@angular/common/http';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    GetCharPipe,
    CommentsComponent,
    HomeComponent,
    SigninComponent,
    NotFoundComponent,
    ContactDetailComponent,
    EditContactComponent,
    EditComponentReactiveFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AboutService,
              ContactService,
              AuthService,
              AuthGuard,
            {provide : 'BaseURL', useValue: BaseURL},
          ProcessHttpmsgService],            
  bootstrap: [AppComponent]
})
export class AppModule { }
