import { Controller, Inject } from '@nestjs/common';
import { Routes, Services } from '../utils/constants';
import { IAuthService } from './auth';

@Controller(Routes.AUTH)
export class AuthController {
	constructor(
		@Inject(Services.AUTH) private readonly authService: IAuthService
	) {}
}
