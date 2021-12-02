import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DiscordStrategy } from './discord.strategy';
import { GithubStrategy } from './github.strategy';
import { GoogleStrategy } from './google.strategy';
import { LinkedinStrategy } from './linkedin.strategy';
import { SpotidyStrategy } from './spotify.strategy';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    GoogleStrategy,
    GithubStrategy,
    SpotidyStrategy,
    LinkedinStrategy,
    DiscordStrategy,
  ],
})
export class AuthModule {}
