import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { FilmFavoriteState, RemoveFavorite, FilmFavorite } from '../store/film-favorite.state';
import { FilmService } from '../film.service';
import { IMDBFilmDetailType } from '../imdb.type';

@Component({
  selector: 'app-film-favorite',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule],
  templateUrl: './film-favorite.component.html',
  styleUrl: './film-favorite.component.scss',
})
export class FilmFavoriteComponent {
  favorites$!: Observable<IMDBFilmDetailType[]>;
  dataFavorite!: IMDBFilmDetailType[]
  
  constructor(private filmService: FilmService) {
   this.filmService.favoriteFilm$.subscribe(film => {
    console.log('fil', film);
    
    if(film) this.dataFavorite = film
   })
    
  }

  removeFavorite(id: string) {
    // this.store.dispatch(new RemoveFavorite(id));
  }
}