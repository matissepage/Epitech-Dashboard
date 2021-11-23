import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserDTO } from './user';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo, private jwtService: JwtService) {
    super(repo);
  }

  async generateToken(user: UserDTO): Promise<string> {
    const payload = {
      username: user.username,
      password: user.password,
      email: user.password,
      type: user.type,
    };
    return this.jwtService.sign(payload);
  }
}
