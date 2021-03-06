import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { writeFileSync } from "fs";

import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule, {
    cors: process.env.NODE_ENV === "development",
  });
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>("PORT");

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const swaggerConfig = new DocumentBuilder()
    .setTitle("Habit Tracker")
    .setDescription("The Habit Tracker app API")
    .setVersion("1.0")
    .setExternalDoc("Postman Collection", "/api-json")
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  if (process.env.NODE_ENV === "development") {
    writeFileSync("./swagger-spec.json", JSON.stringify(document, null, 2));
  }
  SwaggerModule.setup("api", app, document);

  await app.listen(port, () => {
    console.log("[WEB]", config.get<string>("BASE_URL"));
  });
}

bootstrap();
