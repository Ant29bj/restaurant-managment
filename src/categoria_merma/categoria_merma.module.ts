import { Module } from '@nestjs/common';
import { CategoriaMermaService } from './categoria_merma.service';
import { CategoriaMermaController } from './categoria_merma.controller';

@Module({
  providers: [CategoriaMermaService],
  controllers: [CategoriaMermaController]
})
export class CategoriaMermaModule {}
