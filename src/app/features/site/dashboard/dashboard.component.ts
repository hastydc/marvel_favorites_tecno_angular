import { Component, OnInit, inject } from '@angular/core';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TableComponent } from '@app/shared/components/table/table.component';
import { ApiService } from '@app/shared/services/api/api.service';
import { Comic } from '@app/models/comic.interface';
import { ComicFilter } from '@app/models/comicFilter.enum';
import { ToastService } from '@app/shared/components/toast/toast.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ButtonsComponent, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private readonly apiService = inject(ApiService);
  private readonly toastService = inject(ToastService);

  baseComics: Comic[] = [];
  comics: Comic[] = [];
  comicFilter: ComicFilter = ComicFilter.ALL;

  ngOnInit(): void {
    this.getComics();
  }

  filter(comicFilter: ComicFilter = ComicFilter.ALL): void {
    this.comicFilter = comicFilter;
    this.comics = this.baseComics;

    this.apiService
      .getComicsFiltered(this.baseComics, this.comicFilter)
      .subscribe({
        next: (comics) => {
          this.comics = comics;
        },
      });
  }

  toggleFavorite({ id, isFavorite }: Comic): void {
    const value = !isFavorite;

    this.apiService.setFavorite(this.baseComics, id, value).subscribe({
      next: (comics) => {
        this.baseComics = comics;
        this.filter(this.comicFilter);
        this.toastService.setData({
          show: true,
          text: value ? 'successfullyAdded' : 'successfullyRemoved',
        });
      },
    });
  }

  getComics(): void {
    this.apiService.getComics().subscribe({
      next: (comics) => {
        this.baseComics = comics;
        this.filter();
      },
      error: () => {
        this.baseComics = [];
      },
    });
  }
}
