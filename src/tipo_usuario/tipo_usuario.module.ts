import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoUsuarioController } from './tipo_usuario.controller';
import { TipoUsuario } from './tipo_usuario.entity';
import { TipoUsuarioService } from './tipo_usuario.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipoUsuario])],
  controllers: [TipoUsuarioController],
  providers: [TipoUsuarioService],
})
export class TipoUsuarioModule {}
