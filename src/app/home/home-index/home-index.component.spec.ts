import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIndexComponent } from './home-index.component';

describe('HomeIndexComponent', () => {
  let component: HomeIndexComponent;
  let fixture: ComponentFixture<HomeIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
