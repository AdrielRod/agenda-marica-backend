import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterUserHandler } from './handlers/register-user.handler';
import { RegisterUserDto } from './dtos/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly registerUserHandler: RegisterUserHandler) {}

  @Post('/register')
  registerUser(
    @Body() userData: RegisterUserDto
  ) {
    return this.registerUserHandler.execute(userData);
  }
}
