import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Routes, Services } from '../utils/constants';
import { IAuthService } from './auth';
import { RegistrationDto } from './dto/registration.dto';
import { LoginDto } from './dto/login.dto';

@Controller(Routes.AUTH)
export class AuthController {
	constructor(
		@Inject(Services.AUTH) private readonly authService: IAuthService
	) {}

	@Post('/login')
	login(@Body() loginDto: LoginDto) {
		// Create Login
		return 'login';
	}
	1;
	@Post('/register')
	register(@Body() registrationDto: RegistrationDto) {
		// Create Register
		return 'register';
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
