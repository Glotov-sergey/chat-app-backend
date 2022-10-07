import { Inject, Injectable } from '@nestjs/common';
import { IAuthService } from './auth';
import { Services } from '../utils/constants';
import { IUserService } from '../user/user';

@Injectable()
export class AuthService implements IAuthService {
	constructor(
		@Inject(Services.USER) private readonly userService: IUserService
	) {}

	// Validating user
	validate(email: string, password: string) {}

	// register User

	// login User

	// Logout Uer
}
