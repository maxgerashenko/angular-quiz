import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ServicesModule } from '../services/services.module';
import { CoursesNavComponent } from './courses-nav.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    ServicesModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDividerModule,
  ],
  declarations: [CoursesNavComponent, AppComponent],
})
export class AppModule {}
