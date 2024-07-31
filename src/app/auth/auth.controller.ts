import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '@/app/auth/auth.service';
import { LoginAuthDto } from '@/app/auth/auth.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {

  constructor(private readonly  authService: AuthService) {

  }


  @ApiBody({
    type: LoginAuthDto
  })
  @Post('login')
  async login(@Body() credentials: LoginAuthDto) {
    return this.authService.login(credentials);
  }
}
