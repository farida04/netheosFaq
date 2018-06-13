import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AccueilFaqComponent } from './accueil-faq/accueil-faq.component';
import { NavComponent } from './nav/nav.component';
import { NewFaqComponent } from './new-faq/new-faq.component';
import { ListeFaqComponent } from './liste-faq/liste-faq.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';


const appRoutes: Routes = [
    {
        path: 'accueil',
        component: AccueilFaqComponent
    },
    {
        path: '',
        component: AccueilFaqComponent
    },
    {
        path: 'liste',
        component: ListeFaqComponent
    },
    {
        path: 'newQestion',
        component: NewFaqComponent
    },
    {
        path: 'signIn',
        component: SignInComponent
    },
    {
        path: 'signUp',
        component: SignUpComponent
    },
];



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    AccueilFaqComponent,
    NavComponent,
    NewFaqComponent,
    ListeFaqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      AuthService,
      AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
