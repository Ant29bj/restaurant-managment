import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CombosModule } from './combos/combos.module';
import { ServiciosModule } from './servicios/servicios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-162.railway.app',
      port: 6063,
      username: 'postgres',
      password: 'yJEVeCWdQ4Wv2liSjPOm',
      database: 'railway',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CombosModule,
    ServiciosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
