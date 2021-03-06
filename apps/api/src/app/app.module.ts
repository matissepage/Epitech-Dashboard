import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { AuthModule } from '../auth/auth.module';
import { User } from '../users/user';
import { UsersModule } from '../users/users.module';
import { GithubModule } from '../github/github.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpotifyModule } from '../spotify/spotify.module';

config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PROD ? 'postgres' : 'localhost',
      port: 5432,
      username: process.env.DATABASE_USR,
      password: process.env.DATABASE_PSW,
      database: process.env.DATABASE_NAME,
      entities: [User],
    }),
    AuthModule,
    UsersModule,
    GithubModule,
    SpotifyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
