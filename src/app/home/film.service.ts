import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { IMDBListType, IMDBFilmDetailType, IMDBFilmFavoriteType } from './imdb.type';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  ApiUrl = 'https://api.collectapi.com/imdb/imdbSearchByName';
  DetailApiUrl = 'https://api.collectapi.com/imdb/imdbSearchById'; 
  private favoriteFilms: any[] = [];

  favoriteFilm$ = new BehaviorSubject<IMDBFilmDetailType[] | null>(null)

  constructor(private http: HttpClient) {}

  getAllFilm(param: Params) {
    return this.http.get<{ result: IMDBListType[] }>(this.ApiUrl, {
      params: param,
    });
  }

  getFilmDetail(id: string) {
    return this.http.get<{ result : IMDBFilmDetailType}>(this.DetailApiUrl, {
      params: { movieId: id },
    });
  }

  addFilmToFavorite(film: IMDBFilmDetailType) {
    // Cek apakah film sudah ada di daftar favorit
    if (!this.favoriteFilms.some((f) => f.imdbID === film.imdbID)) {
      this.favoriteFilms.push(film); // Tambahkan film ke array favorit
      this.favoriteFilm$.next([...this.favoriteFilms]); // Emit nilai baru
    }
  }

  getFavorites() {
    return this.favoriteFilm$;
  }
}