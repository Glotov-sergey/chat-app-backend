import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	try {
		const app = await NestFactory.create(AppModule);
		const { PORT } = process.env;
		app.setGlobalPrefix('api');
		await app.listen(PORT, () => console.log(`server started on port ${PORT}`));
	} catch (e) {
		console.log(e);
	}
}
bootstrap();
