import { Component } from '@angular/core';
import { IMDBListType } from '../imdb.type';
import { ActivatedRoute, Params } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-home-index',
  standalone: false,
  templateUrl: './home-index.component.html',
  styleUrl: './home-index.component.scss'
})
export class HomeIndexComponent {
  filmCollections: IMDBListType[] = [];
  
    params: Params = {}
  
    constructor(
      private filmService: FilmService,
      private route: ActivatedRoute
    ){
      this.route.parent?.queryParamMap.subscribe((param) => {
        if(param.has('query')) {
          this.params['query'] = param.get('query')
        } else {
          this.params['query'] = 'marvel'
        }
        this.filmService.getAllFilm(this.params).subscribe(
          (res) => {
            console.log('Film Collections:', res.result); // Debug response
            this.filmCollections = res.result ?? [];
          },
          (err) => console.error('Error fetching films:', err) // Debug error
        );
      })
    }
}
