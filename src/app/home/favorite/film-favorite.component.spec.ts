import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmFavoriteComponent } from './film-favorite.component';

describe('FilmFavoriteComponent', () => {
  let component: FilmFavoriteComponent;
  let fixture: ComponentFixture<FilmFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmFavoriteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
