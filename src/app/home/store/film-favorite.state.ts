import { State, Action, StateContext, Selector } from '@ngxs/store';

// Model untuk film favorit
export interface FilmFavorite {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Genre: string;
}

// Action untuk mengelola favorit
export class AddFavorite {
  static readonly type = '[Favorite] Add';
  constructor(public payload: FilmFavorite) {}
}

export class RemoveFavorite {
  static readonly type = '[Favorite] Remove';
  constructor(public imdbID: string) {}
}

// State untuk menyimpan daftar favorit
@State<FilmFavorite[]>({
  name: 'favorites',
  defaults: []
})
export class FilmFavoriteState {
  @Selector()
  static getFavorites(state: FilmFavorite[]): FilmFavorite[] {
    return state;
  }

  @Action(AddFavorite)
  addFavorite(ctx: StateContext<FilmFavorite[]>, action: AddFavorite): void {
    const state = ctx.getState();
    const exists = state.find(film => film.imdbID === action.payload.imdbID);
    if (!exists) {
      ctx.setState([...state, action.payload]);
    }
  }

  @Action(RemoveFavorite)
  removeFavorite(ctx: StateContext<FilmFavorite[]>, action: RemoveFavorite): void {
    const state = ctx.getState();
    ctx.setState(state.filter(film => film.imdbID !== action.imdbID));
  }
}
