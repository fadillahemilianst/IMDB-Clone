import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-x-collect-api';

  searchName = new FormControl<string | null>("marvel");

  constructor(private router: Router, private route: ActivatedRoute) {
    
    this.searchName.valueChanges
      .pipe(
        debounceTime(300) /* Tunggu 300ms setelah pengguna berhenti mengetik*/,
        distinctUntilChanged() /* Hanya memproses nilai yang benar-benar berubah */
      )
      .subscribe((value) => {
        this.router.navigate([], {
          queryParams: {
            query: value
          },
          queryParamsHandling:
            'merge' /* Untuk mempertahankan query params lain */,
        });
      });


  }

  favoritePage(){
    
  }

  deleteFilter() {
    this.searchName.reset();
  }
}