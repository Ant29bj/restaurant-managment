import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MermasController } from './mermas.controller';
import { Mermas } from './mermas.entity';
import { MermasService } from './mermas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Mermas])],
  controllers: [MermasController],
  providers: [MermasService],
})
export class MermasModule {}
