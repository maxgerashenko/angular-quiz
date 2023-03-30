import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const modules = [
  BrowserAnimationsModule,
  MatListModule,
  MatButtonModule,
  MatCardModule,
  MatSlideToggleModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: [],
})
export class MaterialModule {}
