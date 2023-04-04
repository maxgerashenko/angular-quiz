import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './root/app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppModule } from './root/app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizResultsModule } from './quiz-result-page/quiz-result.module';
import { QuizModule } from './quiz-page/quiz.module';
import { QuizListModule } from './quiz-list-page/quiz-list.module';
import { StartPageModule } from './start-page/start-page.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    QuizResultsModule,
    AppModule,
    QuizModule,
    QuizListModule,
    StartPageModule,
  ],
  bootstrap: [AppComponent], // importatnt for bootstrap
})
export class MainModule { }
