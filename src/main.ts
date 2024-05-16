import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configurations from './config/configurations';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(configurations().appPort);
}
bootstrap();

//.env values
console.log('CONFIGURATIONS');
console.log(configurations());
