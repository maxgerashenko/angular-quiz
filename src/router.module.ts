import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { QuizComponent } from './quiz/quiz.component';
import { StartPageComponent } from './start-page/start-page.component';

export const routes: Routes = [
  { path: 'start', component: StartPageComponent },
  { path: 'course', component: QuizListComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'results', component: QuizResultsComponent },

  // other
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: '**', redirectTo: 'start' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
