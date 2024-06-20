import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RegisterUserDto } from '../dtos/register-user.dto';
import { hash } from 'bcryptjs';

@Injectable()
export class RegisterUserHandler {
  constructor(private prismaService: PrismaService) {}
  async execute(userData: RegisterUserDto) {
    const { name, email, password } = userData;

    console.log(userData);

    const userAlreadyExists = await this.prismaService.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error('user/email already exists');
    }

    const hashedPassword = await hash(password, 8);
    const user = await this.prismaService.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        cpf: '00000000000',
        phone: '00000000000',
        createAt: new Date(),
        hasAcess: false,
        image: '',
        neighborhood: '',
        situationSchedule: 'not sended',
        zipCode: '',
      },
    });

    return 'user created';
  }
}
