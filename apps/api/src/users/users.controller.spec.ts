import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersModule } from './users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user'
import { config } from 'dotenv';

config();

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersModule, TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.PROD ? 'postgres' : 'localhost',
        port: 5432,
        username: process.env.DATABASE_USR,
        password: process.env.DATABASE_PSW,
        database: process.env.DATABASE_NAME,
        entities: [User],
      })],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
