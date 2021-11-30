import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DashBoardResponse } from 'shared/DashboardResponse.model';
import { SpotifyArtist, SpotifyTrack } from 'shared/spotify.model';
import { SpotifyService } from './spotify.service';

@Controller('spotify')
export class SpotifyController {
  constructor(private spotifyService: SpotifyService) {}

  @Get('/search/:artist/:type/:token')
  spotifySearch(
    @Param('artist') id: string,
    @Param('token') token: string,
    @Param('type') type: string,
  ): Observable<DashBoardResponse<SpotifyArtist[]>> {
    return this.spotifyService.searchArtist(id, token, type);
  }

  @Get('/search/track/:id/:token')
  spotifySearchTrack(
    @Param('id') id: string,
    @Param('token') token: string,
  ): Observable<DashBoardResponse<SpotifyTrack[]>> {
    return this.spotifyService.searchTrack(id, token);
  }
}
