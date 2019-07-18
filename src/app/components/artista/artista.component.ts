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

  constructor(private activatedRouter: ActivatedRoute,
              private spotifyService: SpotifyService) { 
    this.activatedRouter.params.subscribe(
      (params) => {
        console.log("ID Artista: ", params['id']);
        this.getArtista(params['id']);
      }
    );
  }

  getArtista(id: string){
      this.spotifyService.getArtist(id).subscribe(
      (data)=> {
        this.artista = data;
        console.log(this.artista);
      }
    );
    
  }

  ngOnInit() {
  }

}
