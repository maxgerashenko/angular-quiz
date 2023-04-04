import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListPageComponent } from './quiz-list-page/quiz-list-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { QuizResultPageComponent } from './quiz-result-page/quiz-result-page.component';

export const routes: Routes = [
  { path: 'start', component: StartPageComponent },
  { path: 'course', component: QuizListPageComponent },
  { path: 'quiz', component: QuizPageComponent },
  { path: 'results', component:  QuizResultPageComponent},

  // other
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: '**', redirectTo: 'start' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}