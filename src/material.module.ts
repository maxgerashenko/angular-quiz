import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const modules = [
  MatListModule,
  MatButtonModule,
  MatCardModule,
  MatSlideToggleModule,
  MatProgressBarModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: [],
})
export class MaterialModule {}
