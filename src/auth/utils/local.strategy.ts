import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Inject, Injectable } from '@nestjs/common';
import { Services } from '../../utils/constants';
import { IAuthService } from '../auth';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(
		@Inject(Services.AUTH) private readonly authService: IAuthService
	) {
		super({ usernameField: 'email' });
	}

	async validate(email: string, password: string) {
		const result = await this.authService.validateUser({ email, password });
		return true;
	}
}
