import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './authentication/local-auth.guard';
import { AuthenticationService } from './authentication/authentication.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthenticationService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }



}
