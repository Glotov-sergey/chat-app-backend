import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './utils/typeorm';
import { PassportModule } from '@nestjs/passport';
import { ConversationModule } from './conversation/conversation.module';
import { ParticipantModule } from './participant/participant.module';

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: '.env.development' }),
		PassportModule.register({ session: true }),
		TypeOrmModule.forRoot({
			type: 'postgres',
			port: Number(process.env.POSTGRES_PORT),
			host: process.env.POSTGRES_HOST,
			username: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DATABASE,
			entities: entities,
			synchronize: process.env.NODE_ENV === 'development'
		}),
		UserModule,
		AuthModule,
		ConversationModule,
		ParticipantModule
	]
})
export class AppModule {}
