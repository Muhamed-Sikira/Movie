import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'ms-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, OnDestroy {
  pageTitle = 'Movie List';
  showImage: boolean = false;
  sub!: Subscription;
  errorMessage = '';
  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredMovies = this.perfomFilter(value);
  }
  filteredMovies: Movie[] = [];
  movie: Movie[] = [];
  constructor(private movieService: MovieService) {}
  perfomFilter(filterBy: string): Movie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movie.filter((movie: Movie) =>
      movie.movieName.toLocaleLowerCase().includes(filterBy)
    );
  }
  togleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this.sub = this.movieService.getMovies().subscribe({
      next: movie => {
        this.movie = movie;
        this.filteredMovies = this.movie;
      },
      error: err => this.errorMessage = err
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
