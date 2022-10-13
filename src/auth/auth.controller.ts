import {
	Body,
	Controller,
	Get,
	HttpStatus,
	Inject,
	Post,
	Req,
	Res,
	UseGuards
} from '@nestjs/common';
import { Request, Response } from 'express';
import { IUserService } from 'src/user/user';
import { Routes, Services } from '../utils/constants';
import { IAuthService } from './auth';
import { RegistrationDto } from './dto/registration.dto';
import { AuthenticatedGuard, LocalAuthGuard } from './utils/guards';

@Controller(Routes.AUTH)
export class AuthController {
	constructor(
		@Inject(Services.AUTH) private readonly authService: IAuthService,
		@Inject(Services.USER) private readonly userService: IUserService
	) {}

	@Post('login')
	@UseGuards(LocalAuthGuard)
	login(@Res() res: Response) {
		return res.send(HttpStatus.OK);
	}

	@Post('register')
	register(@Body() registrationDto: RegistrationDto) {
		return this.userService.createUser(registrationDto);
	}

	@Get('status')
	@UseGuards(AuthenticatedGuard)
	status(@Req() req: Request, @Res() res: Response) {
		res.send(req.user);
	}

	@Post('logout')
	logout() {
		// create Logout
		return 'logout';
	}
}
