import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Routes, Services } from '../utils/constants';
import { IUserService } from './user';
import { RegistrationDto } from '../auth/dto/registration.dto';
import { instanceToPlain } from 'class-transformer';

@Controller(Routes.USER)
export class UserController {
	constructor(
		@Inject(Services.USER) private readonly userService: IUserService
	) {}

	@Post()
	createUser(@Body() createUserDto: RegistrationDto) {
		return instanceToPlain(this.userService.createUser(createUserDto));
	}
}
