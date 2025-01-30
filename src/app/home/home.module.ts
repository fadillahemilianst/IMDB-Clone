import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { HomeIndexComponent } from './home-index/home-index.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { RouterModule, Routes } from '@angular/router';
import { FilmFavoriteComponent } from './favorite/film-favorite.component';
import { FilmFavoriteState } from './store/film-favorite.state';

const routes: Routes = [
  {
    path: '',
    component: HomeIndexComponent
  },
  {
    path: 'film/:id',
    component: DetailFilmComponent
  },
  {
    path: 'favorite',
    component: FilmFavoriteComponent
  },
]

@NgModule({
  declarations: [
    HomeIndexComponent,
    DetailFilmComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // NgxsModule.forFeature([FilmFavoriteState])
  ]
})
export class HomeModule { }