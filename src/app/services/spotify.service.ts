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
      Authorization: 'Bearer BQASJNvG4lu4EWF8FkiuMSIQZ7wg2qfqkdju2_MhgKes7SdzRqyP3hr9OXafZ1TrBSV7h7DBHQWvy7fAWCs'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases').pipe(map((data: any) => data.albums.items));
  }

  getArtist(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data: any) => data.artists.items));
  }

}
