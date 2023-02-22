import { Injectable } from "@nestjs/common";
import { AdminEmpresaService } from '../admin_empresa/admin_empresa.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {

  constructor(private adminEmpresaService: AdminEmpresaService, private jwtService: JwtService) {
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const adminAuth = await this.adminEmpresaService.findOne({ where: { username } });
    if (adminAuth && adminAuth.password === pass) {
      const { password, ...result } = adminAuth;
      return result;
    }
    return null;
  }


  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return { acces_token: this.jwtService.sign(payload) };
  }

}
