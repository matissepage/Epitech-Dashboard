/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthService {
  googleLogin(req: Request): { message: string; user: any } {
    if (!req.user)
      return {
        message: 'no user from Google',
        user: {},
      };
    return {
      message: 'User information from googlee',
      user: req.user,
    };
  }

  githubLogin(req: Request): { message: string; user: any } {
    if (!req.user)
      return {
        message: 'no user from github',
        user: {},
      };
    return {
      message: 'User information from github',
      user: req.user,
    };
  }

  spotifyLogin(req: Request): { message: string; user: any } {
    if (!req.user)
      return {
        message: 'no user for sporify',
        user: {},
      };
    return {
      message: 'User information from Spotify',
      user: req.user,
    };
  }

  linkedinLogin(req: Request): { message: string; user: any } {
    if (!req.user)
      return {
        message: 'no user for linkedin',
        user: {},
      };
    return {
      message: 'User information from linkedin',
      user: req.user,
    };
  }

  discordLogin(req: Request): { message: string; user: any } {
    if (!req.user)
      return {
        message: 'no user for discord',
        user: {},
      };
    return {
      message: 'User information from discord',
      user: req.user,
    };
  }

  gitlabLogin(req: Request): { message: string; user: any } {
    if (!req.user)
      return {
        message: 'no user for gitlab',
        user: {},
      };
    return {
      message: 'User information from gitlab',
      user: req.user,
    };
  }

  youtubeLogin(req: Request): { message: string; user: any } {
    if (!req.user)
      return {
        message: 'no user for youtube',
        user: {},
      };
    return {
      message: 'User information from youtube',
      user: req.user,
    };
  }
}
