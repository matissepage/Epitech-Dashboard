import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Google Connection
  @Get('/google')
  @UseGuards(AuthGuard('google'))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleAuth(@Req() req: Request) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthCallback(@Req() req: Request) {
    return this.authService.googleLogin(req);
  }

  // Github Connection
  @Get('/github')
  @UseGuards(AuthGuard('github'))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async githubAuth(@Req() req: Request) {}

  @Get('/github/redirect')
  @UseGuards(AuthGuard('github'))
  githubAuthCallback(@Req() req: Request) {
    return this.authService.githubLogin(req);
  }

  // Spotify Connection
  @Get('/spotify')
  @UseGuards(AuthGuard('spotify'))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async spotifyAuth(@Req() req: Request) {}

  @Get('/spotify/redirect')
  @UseGuards(AuthGuard('spotify'))
  spotifyAuthCallback(@Req() req: Request) {
    return this.authService.spotifyLogin(req);
  }
}
