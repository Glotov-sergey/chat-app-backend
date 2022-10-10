import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Services } from '../utils/constants';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './utils/local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/utils/typeorm';
import { SessionSerializer } from './serializer';

@Module({
	imports: [TypeOrmModule.forFeature([User]), UserModule],
	providers: [
		LocalStrategy,
		SessionSerializer,
		{
			provide: Services.AUTH,
			useClass: AuthService
		}
	],
	controllers: [AuthController]
})
export class AuthModule {}
