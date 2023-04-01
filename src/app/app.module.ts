import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from '../router.module';
import { CoursesNavComponent } from './courses-nav.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule, MaterialModule],
  declarations: [AppComponent, CoursesNavComponent],
})
export class AppModule {}
