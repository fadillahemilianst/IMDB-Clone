import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';
import { IMDBFilmDetailType, IMDBListType } from '../imdb.type';
import { Store } from '@ngxs/store';
import { AddFavorite, RemoveFavorite, FilmFavoriteState } from '../store/film-favorite.state';

@Component({
  selector: 'app-detail-film',
  standalone : false,
  templateUrl: './detail-film.component.html',
  styleUrl: './detail-film.component.scss',
})
export class DetailFilmComponent implements OnInit {
  filmDetail: IMDBFilmDetailType | null = null;
  isFavorite: boolean = false;


  
  constructor(private filmService: FilmService, private route: ActivatedRoute) {
    this.filmService.favoriteFilm$.subscribe((val) => {
      console.log('data dari state',val)
    })
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Film ID:', id); // Log ID film
    if (id) {
      this.filmService.getFilmDetail(id).subscribe(
        (detail) => {
          console.log('Film Detail Response:', detail); 
          this.filmDetail = detail.result

          // const favorites = this.store.selectSnapshot(FilmFavoriteState.getFavorites);
          // this.isFavorite = favorites.some((film) => film.imdbID === id);
        },
        (error) => {
          console.error('Error Fetching Film Detail:', error); 
        }
      );
    }
  }
  
  toggleFavorite(film: any) {
    
      this.filmService.addFilmToFavorite(film); 
      this.isFavorite = true;
    
  }
}
