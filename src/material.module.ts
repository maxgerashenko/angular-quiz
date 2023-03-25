import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const modules = [
  MatListModule,
  MatButtonModule,
  MatCardModule,
  MatSlideToggleModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: [],
})
export class MaterialModule {}
