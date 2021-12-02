/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { config } from 'dotenv';
import { Strategy } from 'passport-gitlab2';

config();

@Injectable()
export class Gitlabtrategy extends PassportStrategy(Strategy, 'gitlab') {
  constructor() {
    super({
      clientID: process.env.GITLAB_CLIENT_ID,
      clientSecret: process.env.GITLAB_CLIENT_SECRET,
      callbackURL: process.env.GITLAB_CALLBACK_URL,
      scope: ['api'],
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any
  ) {
    const user = {
      profile,
      accessToken,
    };
    return done(null, user);
  }
}
