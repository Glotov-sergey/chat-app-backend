import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Services } from '../utils/constants';

@Module({
	imports: [],
	providers: [{ provide: Services.USER, useClass: UserService }],
	controllers: [UserController]
})
export class UserModule {}
