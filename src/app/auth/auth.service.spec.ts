import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import SupabaseIam from '@/app/auth/iam/supabase.iam';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, {
        provide: SupabaseIam,
        useValue: {},
      }],

    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
