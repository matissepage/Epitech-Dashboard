import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Crud, Override, ParsedRequest, ParsedBody, CrudRequest, CrudController } from '@nestjsx/crud';
import { User, UserDTO } from './user';

@Crud({
  model: {
    type: User,
  },
})
@Controller('users')
export class UsersController {
  constructor(public service: UsersService) {}

  get base(): CrudController<User | UserDTO> {
    return this;
  }

  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: User,
  ): Promise<User | UserDTO> {
    const userDto: UserDTO = {
      id: dto.id,
      username: dto.username,
      password: dto.password,
      email: dto.email,
      token: 'TOKEN',
    };
    return this.base.createOneBase(req, userDto);
  }
}
