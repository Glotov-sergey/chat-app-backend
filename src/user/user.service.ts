import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUserService } from './user';
import { FindUserParams, RegisterDetails } from '../utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../utils/typeorm';
import { Repository } from 'typeorm';
import { hashPassword } from '../utils/helpers';

@Injectable()
export class UserService implements IUserService {
	constructor(
		@InjectRepository(User) private readonly userRepository: Repository<User>
	) {}

	async createUser(createUserDetails: RegisterDetails) {
		const exitingUser = await this.userRepository.findOne({
			where: { email: createUserDetails.email }
		});

		if (exitingUser)
			throw new HttpException('User already exists', HttpStatus.CONFLICT);

		const password = await hashPassword(createUserDetails.password);
		const newUser = await this.userRepository.create({
			...createUserDetails,
			password
		});

		return await this.userRepository.save(newUser);
	}

	async findUser(findUserParams: FindUserParams): Promise<User> {
		return await this.userRepository.findOneBy(findUserParams);
	}
}
