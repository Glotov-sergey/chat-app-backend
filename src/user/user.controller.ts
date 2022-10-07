import { Controller, Get, Inject } from '@nestjs/common';
import { Routes, Services } from '../utils/constants';
import { IUserService } from './user';

@Controller(Routes.USER)
export class UserController {
	constructor(
		@Inject(Services.USER) private readonly userService: IUserService
	) {}

	@Get()
	sayHello() {
		return this.userService.sayHello();
	}
}
