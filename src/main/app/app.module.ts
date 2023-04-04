import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ServicesModule } from '../services/services.module';
import { CoursesNavComponent } from './courses-nav.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    ServicesModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
  ],
  declarations: [
    CoursesNavComponent,
    AppComponent
  ],
})
export class AppModule { }
