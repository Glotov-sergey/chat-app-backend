import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Services } from '../utils/constants';
import { UserModule } from '../user/user.module';

@Module({
	imports: [UserModule],
	providers: [
		{
			provide: Services.AUTH,
			useClass: AuthService
		}
	],
	controllers: [AuthController]
})
export class AuthModule {}
