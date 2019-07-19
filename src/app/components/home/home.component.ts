import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean = true;
  error: boolean = false;
  mensajeError: string = "";

  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getNewReleases().subscribe(
      (data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      } , (err) => {
          console.log("ERROR: ", err);
          this.loading = false;
          this.error = true;
          this.mensajeError = err.error.error.message;
          console.log("mensaje: ", this.mensajeError);
      }
    );
  }

  ngOnInit() {
  }

}
