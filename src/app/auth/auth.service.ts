import { Injectable } from '@nestjs/common';
import BaseIam from '@/app/auth/iam/base.iam';
import SupabaseIam from '@/app/auth/iam/supabase.iam';
import { LoginAuthDto } from '@/app/auth/auth.dto';

@Injectable()
export class AuthService extends BaseIam {

  constructor(private readonly  supabaseService: SupabaseIam) {
    super();
  }

  async login(credentials: LoginAuthDto): Promise<any> {
    return await this.supabaseService.login(credentials);
  }

  async recoverPassword(): Promise<any> {
    return Promise.resolve(undefined);
  }

  async register(credentials: LoginAuthDto): Promise<any> {
    return Promise.resolve(undefined);
  }

  async updatePassword(): Promise<any> {
    return Promise.resolve(undefined);
  }
}
