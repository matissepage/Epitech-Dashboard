import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { config } from 'dotenv';
import { Strategy } from 'passport-google-oauth20';

config();

@Injectable()
export class YoutubeStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ['profile', 'email'],
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any
  ) {
    const { emails, name, photos } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };
    return done(null, user);
  }
}
