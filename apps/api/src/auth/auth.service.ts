import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthService {
  googleLogin(req: Request): string | { message: string; user: unknown } {
    if (!req.user) return 'no user from Google';
    return {
      message: 'User information from googlee',
      user: req.user,
    };
  }

  githubLogin(req: Request): string | { message: string; user: unknown } {
    if (!req.user) return 'no user from github';
    return {
      message: 'User information from github',
      user: req.user,
    };
  }

  spotifyLogin(req: Request): string | { message: string; user: unknown } {
    if (!req.user) return 'no user for sporify';
    return {
      message: 'User information from Spotify',
      user: req.user,
    };
  }
}
