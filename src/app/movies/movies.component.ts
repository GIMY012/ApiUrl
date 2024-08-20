import { Imovie } from '../imovie';
import { MoviesService } from './../core/movies.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  // imagUrl='https://image.tmdb.org/t/p/w500';
movies:Imovie[]=[];
  constructor(private _MoviesService: MoviesService) {
    // this._MoviesService.getPosts().subscribe()
  }

  ngOnInit(): void 
  {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this._MoviesService.getPosts().subscribe(
    //   {
    //     next: (res) => { console.log(res) },
    //     error: (e) => { console.log(e) }
    //   }
    // )
    this._MoviesService.getProducts().subscribe(
      {
        next:(response)=>{
          this.movies=response;
          console.log(response);
          
        },
        error:(e)=>{console.log(e)}
      }
    )
  }
}
