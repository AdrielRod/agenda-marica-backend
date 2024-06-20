import { RegisterUserHandler } from './handlers/register-user.handler';
import { RegisterUserDto } from './dtos/register-user.dto';
export declare class AuthController {
    private readonly registerUserHandler;
    constructor(registerUserHandler: RegisterUserHandler);
    registerUser(userData: RegisterUserDto): Promise<string>;
}
