import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppModule } from './app/app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  BrowserAnimationsModule,
    AppRoutingModule,
    AppModule,
  ],
  bootstrap: [AppComponent], // importatnt for bootstrap
})
export class MainModule { }
