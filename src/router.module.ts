import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
  { path: 'list', component: QuizListComponent }, // default
  { path: 'quiz', component: QuizComponent },
  { path: 'results', component: QuizResultsComponent },

  // other
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
