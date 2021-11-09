import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('/google')
  googleAuth(): string {
    return 'googleAuth function'
  }
}
