import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoMermasController } from './tipo_mermas.controller';
import { TipoMermas } from './tipo_mermas.entity';
import { TipoMermasService } from './tipo_mermas.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipoMermas])],
  controllers: [TipoMermasController],
  providers: [TipoMermasService],
})
export class TipoMermasModule {}
