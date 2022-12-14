import { Module } from '@nestjs/common';
import { CategoriaMermaService } from './categoria_merma.service';
import { CategoriaMermaController } from './categoria_merma.controller';
import { CategoriaMerma } from './categoria_merma.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaMerma])],
  providers: [CategoriaMermaService],
  controllers: [CategoriaMermaController]
})
export class CategoriaMermaModule { }
