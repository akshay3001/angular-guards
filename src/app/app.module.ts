import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NonAuthenticatedComponent } from './non-authenticated/non-authenticated.component';
import { HomeComponent } from './home/home.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [AppComponent, NonAuthenticatedComponent, HomeComponent],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
