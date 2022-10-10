import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
	try {
		const app = await NestFactory.create(AppModule);
		const { PORT } = process.env;
		app.setGlobalPrefix('api');
		app.useGlobalPipes(new ValidationPipe());

		app.use(
			session({
				secret: process.env.COOKIE_SECRET,
				saveUninitialized: false,
				resave: false,
				cookie: {
					maxAge: 86400000 // cookie lives 24h
				}
			})
		);

		app.use(passport.initialize());
		app.use(passport.session());

		await app.listen(PORT, () => console.log(`server started on port ${PORT}`));
	} catch (e) {
		console.log(e);
	}
}
bootstrap();
