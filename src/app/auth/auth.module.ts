import { Module } from '@nestjs/common';
import { AuthController } from '@/app/auth/auth.controller';
import { AuthService } from '@/app/auth/auth.service';
import SupabaseIam from '@/app/auth/iam/supabase.iam';

@Module({
  controllers:[AuthController],
  providers:[AuthService, SupabaseIam],
  exports:[SupabaseIam]
})
export class AuthModule {}
