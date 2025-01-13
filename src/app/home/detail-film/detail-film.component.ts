import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';
import { IMDBFilmDetailType } from '../imdb.type';

@Component({
  selector: 'app-detail-film',
  standalone : false,
  templateUrl: './detail-film.component.html',
  styleUrl: './detail-film.component.scss',
})
export class DetailFilmComponent implements OnInit {
  filmDetail: IMDBFilmDetailType | null = null;

  constructor(private filmService: FilmService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Film ID:', id); // Log ID film
    if (id) {
      this.filmService.getFilmDetail(id).subscribe(
        (detail) => {
          console.log('Film Detail Response:', detail); 
          this.filmDetail = detail.result
        },
        (error) => {
          console.error('Error Fetching Film Detail:', error); 
        }
      );
    }
  }
}
