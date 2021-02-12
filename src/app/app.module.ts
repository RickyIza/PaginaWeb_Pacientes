import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './@componets/home/home.component';
import { DetailsPatiensComponent } from './@componets/details-patiens/details-patiens.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsPatiensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
