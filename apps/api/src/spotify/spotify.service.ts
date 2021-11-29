import { Injectable } from '@nestjs/common';
import { SpotifyArtist } from './../../../../shared/spotify.model';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  constructor(private httpService: HttpService) {}

  searchArtist(artist: string, token: string, type: string): Observable<SpotifyArtist[]> {
    return this.httpService
      .get(
        `https://api.spotify.com/v1/search?q=${artist}&type=${type}&limit=20`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .pipe(map(response => {
        return response.data.artists.items
      }));
  }
}
