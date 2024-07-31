import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { appConfig, authConfig } from '@/configs';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { version, name } from "../package.json";
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.useGlobalPipes(new ValidationPipe({
    validateCustomDecorators: true,
    stopAtFirstError: true,
    transform: true
  }));
  app.use(cookieParser(String(appConfig.key)));
  configSwagger(app);
  await app.listen(String(appConfig.port));
}

function configSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle(name)
    .setDescription("Sistema de gestión para nutricionistas")
    .setVersion(version)
    .addSecurity("bearer",{type:"http", scheme:"bearer", in:"headers"})
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/doc", app, document);

}
bootstrap();
