import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthguardGuard } from './authguard.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  
  ],
  providers: [AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
