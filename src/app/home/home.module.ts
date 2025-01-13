import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIndexComponent } from './home-index/home-index.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: '',
    component: HomeIndexComponent
  },
  {
    path: 'film/:id',
    component: DetailFilmComponent
  }
]

@NgModule({
  declarations: [
    HomeIndexComponent,
    DetailFilmComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }