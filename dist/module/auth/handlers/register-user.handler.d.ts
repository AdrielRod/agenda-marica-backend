import { PrismaService } from 'src/database/prisma.service';
import { RegisterUserDto } from '../dtos/register-user.dto';
export declare class RegisterUserHandler {
    private prismaService;
    constructor(prismaService: PrismaService);
    execute(userData: RegisterUserDto): Promise<string>;
}
