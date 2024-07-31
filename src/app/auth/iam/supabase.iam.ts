import BaseIam from '@/app/auth/iam/base.iam';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { LoginAuthDto } from '@/app/auth/auth.dto';
import { appConfig, authConfig } from '@/configs';
import { sign } from 'jsonwebtoken';

@Injectable()
export default class SupabaseIam extends BaseIam {
  private supabase: SupabaseClient;

  constructor() {
    super();
    const { supabaseApiKey, supabaseProjectUrl } = authConfig;
    this.supabase = createClient(supabaseProjectUrl, supabaseApiKey);
  }

  async login(credentials: LoginAuthDto): Promise<any> {
    const { data: { user, session }, error } =
      await this.supabase.auth.signInWithPassword({ ...credentials });
    if (error) {
      throw new HttpException(error, HttpStatus.UNAUTHORIZED);
    }
    const access_token = sign(user, String(appConfig.key), { expiresIn: session.expires_in });
    return { user, access_token };
  }

  async register(credentials: LoginAuthDto) {
    const { data: { user, session }, error } =
      await this.supabase.auth.signUp({ ...credentials });
    if (error) {
      throw new HttpException(error, HttpStatus.UNAUTHORIZED);
    }
    const access_token = sign(user, String(appConfig.key), { expiresIn: session.expires_in });
    return { user, access_token };
  }


  async recoverPassword(): Promise<any> {
    return Promise.resolve(undefined);
  }


  async updatePassword(): Promise<any> {
    return Promise.resolve(undefined);
  }


}