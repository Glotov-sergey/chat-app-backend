import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { IAuthService } from './auth';
import { Services } from '../utils/constants';
import { IUserService } from '../user/user';
import { ValidateUserDetails } from '../utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/utils/typeorm';
import { Repository } from 'typeorm';
import { compareHash } from 'src/utils/helpers';

@Injectable()
export class AuthService implements IAuthService {
	constructor(
		@Inject(Services.USER) private readonly userService: IUserService,
		@InjectRepository(User) private readonly userRepository: Repository<User>
	) {}

	// Validating user
	async validateUser(userCredentials: ValidateUserDetails) {
		const user = await this.userService.findUser({
			email: userCredentials.email
		});

		if (!user)
			throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);

		return await compareHash(userCredentials.password, user.password);
	}

	// register User

	// login User

	// Logout Uer
}
