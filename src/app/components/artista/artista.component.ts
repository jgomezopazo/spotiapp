import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loading: boolean = true;
  topTracks: any[] = [];

  constructor(private activatedRouter: ActivatedRoute,
              private spotifyService: SpotifyService) { 
    this.activatedRouter.params.subscribe(
      (params) => {
        console.log("ID Artista: ", params['id']);
        this.getArtista(params['id']);
        this.getTopTracks(params['id']);
      }
    );
  }

  getArtista(id: string){
      this.spotifyService.getArtist(id).subscribe(
      (data)=> {
        this.artista = data;
        console.log(this.artista);
        this.loading=false;
      }
    );
    
  }

  getTopTracks(id: string){
    this.spotifyService.getTopTracks(id).subscribe(
      tracks => {
        console.log("tracks: " , tracks);
        this.topTracks = tracks;
      });
  }

  ngOnInit() {
  }

}
