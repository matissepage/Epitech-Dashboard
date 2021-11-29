import { Controller, Get, Param } from '@nestjs/common';
import { SpotifyService } from './spotify.service';

@Controller('spotify')
export class SpotifyController {
  constructor(private spotifyService: SpotifyService) {}

  @Get('/search/:artist/:type/:token')
  spotifySearch(
    @Param('artist') id: string,
    @Param('token') token: string,
    @Param('type') type: string,
  ) {
    return this.spotifyService.searchArtist(id, token, type);
  }
}
