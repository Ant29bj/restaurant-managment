import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { PassportModule } from "@nestjs/passport";
import { EnviromentSettings } from "src/setup/credentials.service";
import { AdminEmpresaModule } from '../admin_empresa/admin_empresa.module';
import { AuthenticationService } from './authentication.service';
import { jwtConstants } from "./constants";
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from "./jwt-auth.guard";
import { APP_GUARD } from "@nestjs/core";

@Module({
  imports: [AdminEmpresaModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthenticationService, LocalStrategy, JwtStrategy, JwtAuthGuard],
  exports: [AuthenticationService],
})
export class AuthenticationModule { }
