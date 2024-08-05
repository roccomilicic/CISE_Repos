import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  //console.log('DB_URI:', process.env.DB_URI); // Print the value of DB_URI
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 8082;
  await app.listen(port, () => console.log(`Server running on port ${port}`));
}
bootstrap();
