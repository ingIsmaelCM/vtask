import { Injectable, NestMiddleware, HttpStatus, HttpException } from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { appConfig } from '@/configs';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: any, res: any, next: () => void) {
    const token = req.headers['authorization'];
    if (!Boolean(token)) {
      throw new HttpException('Token required', HttpStatus.UNAUTHORIZED);
    }
    res.user = await this.validateToken(token);
    next();
  }

  async validateToken(token: string) {
    token = token.replace('Bearer ', '');
    try {
      return verify(token, String(appConfig.key));
    } catch (e: any) {
      throw new HttpException('Token invalid', HttpStatus.UNAUTHORIZED);
    }
  }
}
