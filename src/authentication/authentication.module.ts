import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secretOrKeyProvider: null,
      signOptions: {
        expiresIn: 36000,
      },
    }),
  ],
})
export class AuthenticationModule {}
