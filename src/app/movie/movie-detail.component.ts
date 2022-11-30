import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from './movie';

@Component({
  selector: 'ms-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  pageTitle = "Movie Detail"
  movie!: Movie;
  constructor(private route: ActivatedRoute,
              private router: Router) { }
   ngOnInit(): void {
     const id = Number(this.route.snapshot.paramMap.get('id'));
     this.pageTitle += `: ${id}`;
     this.movie = {
       movieId: 1,
       movieName: 'Bad Boys for Life',
       movieGenre: 'Action-Comedy-Crime-Thriller',
       releaseDate: 'January 17, 2020',
       price: 18.32,
       starRating: 3.2,
       imageUrl: 'assets/images/BadBoysForLife.jpg',
     };
   }
   onBack(): void{
    this.router.navigate(['/movie']);
   }
}
