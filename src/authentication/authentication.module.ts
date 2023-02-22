import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { PassportModule } from "@nestjs/passport";
import { EnviromentSettings } from "src/setup/credentials.service";
import { AdminEmpresaModule } from '../admin_empresa/admin_empresa.module';
import { AuthenticationService } from './authentication.service';
import { jwtConstants } from "./contants";
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [AdminEmpresaModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthenticationService, LocalStrategy],
  exports: [AuthenticationService],
})
export class AuthenticationModule { }
