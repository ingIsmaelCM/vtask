import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthController } from '@/app/auth/auth.controller';
import { AuthModule } from '@/app/auth/auth.module';
import { AuthService } from '@/app/auth/auth.service';
import { UserModule } from '@/app/user/user.module';
import { AuthMiddleware } from '@/app/auth/auth.middleware';


@Module({
  imports: [AuthModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(AuthMiddleware)
      .forRoutes("users")
  }
}
