import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { PassportModule } from "@nestjs/passport";
import { EnviromentSettings } from "src/setup/credentials.service";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      signOptions: {
        expiresIn: 36000,
      },
    }),
  ],
  providers: [EnviromentSettings],
})
export class AuthenticationModule { }
