import { NgModule } from '@angular/core';
import { QuizModule } from './quiz/quiz.module';
import { QuizResultsModule } from './quiz-results/quiz-results.module';
import { QuizListModule } from './quiz-list/quiz-list.module';
import { AppComponent } from './app/app.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './router.module';
import { MaterialModule } from './material.module';
import { PipesModule } from './pipesAndDirectives/pipes.module';
import { AppModule } from './app/app.module';

@NgModule({
  imports: [
    BrowserModule, // importatnt for bootstrap
    AppRoutingModule, // routring
    CommonModule,
    QuizModule,
    QuizResultsModule,
    PipesModule,
    QuizListModule,
    MaterialModule,
    AppModule,
  ],
  bootstrap: [AppComponent], // importatnt for bootstrap
})
export class MainModule {}
