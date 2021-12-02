import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  Crud,
  Override,
  ParsedRequest,
  ParsedBody,
  CrudRequest,
  CrudController,
} from '@nestjsx/crud';
import { User, UserDTO } from './user';

@Crud({
  model: {
    type: User,
  },
})
@Controller('user')
export class UsersController {
  constructor(public service: UsersService) {}

  get base(): CrudController<User | UserDTO> {
    return this;
  }

  @Get('/login/:username/:password')
  async loginUser(
    @Param('username') username,
    @Param('password') password,
  ) {
    const res = await this.service.getOneUser(username, password)
    if (res === undefined) {
      return {
        statusCode: 500,
        message: 'Username or password is incorrect',
      };
    }
    return {
      statusCode: 200,
      ...res
    };
  }

  @Override('createOneBase')
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: User
  ): Promise<User | UserDTO> {
    const res = (await this.base.createOneBase(req, dto)) as UserDTO;
    res.type = 'user';
    res.token = await this.service.generateToken(res);
    return new Promise((resolve, rejects) => {
      try {
        resolve(res);
      } catch (err) {
        rejects(err);
      }
    });
  }
}
