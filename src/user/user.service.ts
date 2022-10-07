import 'reflect-metadata';
import { Injectable } from '@nestjs/common';
import { IUserService } from './user';
import { RegisterDetails } from '../utils/types';

@Injectable()
export class UserService implements IUserService {
	createUser(createUserDetails: RegisterDetails) {
		console.log('UserService.createUser()');
	}
	findOne(id: number) {}
}
