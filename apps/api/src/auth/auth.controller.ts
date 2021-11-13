import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/google')
  @UseGuards(AuthGuard('google'))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleAuth(@Req() req: Request) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthCallback(@Req() req: Request) {
    // or `return req.get('/google/redirect');`
    return this.authService.googleLogin(req);
  }

  @Get('/github')
  @UseGuards(AuthGuard('github'))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async githubAuth(@Req() req: Request) {}

  @Get('/github/redirect')
  @UseGuards(AuthGuard('github'))
  githubAuthCallback(@Req() req: Request) {
    // or `return req.get('/github/redirect');`
    return this.authService.githubLogin(req);
  }
}
