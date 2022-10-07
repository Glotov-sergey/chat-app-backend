import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: '.env.development' }),
		TypeOrmModule.forRoot({
			type: 'postgres',
			port: Number(process.env.POSTGRES_PORT),
			host: process.env.POSTGRES_HOST,
			username: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DATABASE,
			autoLoadEntities: true,
			synchronize: process.env.NODE_ENV === 'development'
		}),
		UserModule,
		AuthModule
	]
})
export class AppModule {}
