import { NestFactory } from "@nestjs/core";
// import { AppModule } from "./app.module";
import 'dotenv/config';
import { createAgent } from '@forestadmin/agent';
import { createSqlDataSource } from '@forestadmin/datasource-sql';
import { Module } from "@nestjs/common";


@Module({ imports: [], controllers: [], providers: [] })
class AppModule { }

(async () => {
  const agent = createAgent({
    authSecret: process.env.FOREST_AUTH_SECRET,
    envSecret: process.env.FOREST_ENV_SECRET,
    isProduction: process.env.NODE_ENV === 'production',
    typingsPath: './typings.ts',
    typingsMaxDepth: 5,

  })
    // Create your SQL datasource
    .addDataSource(createSqlDataSource(process.env.DATABASE_URL));

  async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });
    await agent.mountOnNestJs(app).start();
    await app.listen(3000);
  }
  bootstrap();

})();
