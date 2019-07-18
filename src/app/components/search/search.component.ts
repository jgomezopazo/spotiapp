import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean = false;

  constructor(private spotifyService: SpotifyService) { }

  buscar(termino: string) {
    if (termino) {
      this.loading = true;
      this.spotifyService.getArtists(termino).subscribe(
        (data: any) => {
          console.log(data);
          this.artistas = data;
          this.loading = false;
        }
      );
    }
  }

  ngOnInit() {
  }

}
