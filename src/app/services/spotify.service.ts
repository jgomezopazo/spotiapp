import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Servicio listo!");
  }

  getQuery(query: string) {

    let url: string = `https://api.spotify.com/v1/${query}`;

    let headers = new HttpHeaders({
      Authorization: 'Bearer BQA358paxZjVGke9vQS-lSlri20slB_coMDSzjYy6WhoEOQZFot-WmIjLOn1cGc5P9XvD98Z3krCi3irxfA'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases').pipe(map((data: any) => data.albums.items));
  }

  getArtists(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data: any) => data.artists.items));
  }

  getArtist(id: string) {

    return this.getQuery(`artists/${id}`);
    //.pipe(map((data: any) => data.artists.items));
  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=ES`)
      .pipe(map((data: any) => data.tracks));
  }

}
