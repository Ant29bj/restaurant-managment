import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CombosModule } from './combos/combos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-106.railway.app',
      port: 6943,
      database: 'railway',
      username: 'postgres',
      password: 'IvNBTbp0QDAr3CAvoaVK',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CombosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
