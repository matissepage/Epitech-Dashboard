import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersModule } from './users.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user'
import { config } from 'dotenv';

describe('UsersService', () => {
  let service: UsersService;

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

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
