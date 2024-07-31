import { LoginAuthDto } from '@/app/auth/auth.dto';

export default abstract class BaseIam {

  abstract login(credentials: LoginAuthDto): Promise<any>

  abstract register(credentials: LoginAuthDto): Promise<any>

  abstract updatePassword(): Promise<any>

  abstract recoverPassword(): Promise<any>
}