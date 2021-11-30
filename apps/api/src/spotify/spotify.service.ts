import { Injectable } from '@nestjs/common';
import { SpotifyArtist, SpotifyTrack } from './../../../../shared/spotify.model';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DashBoardResponse } from 'shared/DashboardResponse.model';

@Injectable()
export class SpotifyService {
  constructor(private httpService: HttpService) {}

  searchArtist(
    artist: string,
    token: string,
    type: string
  ): Observable<DashBoardResponse<SpotifyArtist[]>> {
    return this.httpService
      .get(
        `https://api.spotify.com/v1/search?q=${artist}&type=${type}&limit=20`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .pipe(
        map((response) => {
          const res: DashBoardResponse<SpotifyArtist[]> = {
            statusCode: response.status.valueOf(),
            message: response.data !== [] ? 'success' : 'Possible bad id',
            response: response.data.artists.items,
          };
          return res;
        })
      );
  }

  searchTrack(
    search: string,
    token: string,
  ): Observable<DashBoardResponse<SpotifyTrack[]>> {
    return this.httpService
      .get(
        `https://api.spotify.com/v1/search?q=${search}&type=track&limit=20`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .pipe(
        map((response) => {
          const res: DashBoardResponse<SpotifyTrack[]> = {
            statusCode: response.status.valueOf(),
            message: response.data !== [] ? 'success' : 'Possible bad id',
            response: response.data.tracks.items,
          };
          return res;
        })
      );
  }
}
