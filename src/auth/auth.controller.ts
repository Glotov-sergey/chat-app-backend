import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { IUserService } from 'src/user/user';
import { Routes, Services } from '../utils/constants';
import { IAuthService } from './auth';
import { RegistrationDto } from './dto/registration.dto';
import { LocalAuthGuard } from './utils/guards';

@Controller(Routes.AUTH)
export class AuthController {
	constructor(
		@Inject(Services.AUTH) private readonly authService: IAuthService,
		@Inject(Services.USER) private readonly userService: IUserService
	) {}

	@Post('login')
	@UseGuards(LocalAuthGuard)
	login() {}
	@Post('/register')
	register(@Body() registrationDto: RegistrationDto) {
		return this.userService.createUser(registrationDto);
	}

	@Get('status')
	// Create getting status functionality
	status() {}

	@Post('/logout')
	logout() {
		// create Logout
		return 'logout';
	}
}
