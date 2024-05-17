import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configurations from './config/configurations';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('RESTful API for Users and Products')
    .setDescription(
      'Endpoints disponibles para el manejo de usuarios y productos.',
    )
    .setVersion('1.0')
    .addTag('Desafío')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);

  app.enableCors();

  await app.listen(configurations().appPort);
}
bootstrap();

//.env values
console.log('CONFIGURATIONS');
console.log(configurations());
