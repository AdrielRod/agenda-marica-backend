import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { RegisterUserHandler } from './handlers/register-user.handler';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [RegisterUserHandler, PrismaService],
})
export class AuthModule {}
