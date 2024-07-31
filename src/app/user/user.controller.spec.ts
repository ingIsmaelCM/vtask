import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '@/app/user/user.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            getUsers: () => {
              return null;
            },
          },
        },
      ],
    }).compile();
    controller = module.get<UserController>(UserController);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return users', async () => {
    expect((await controller.getUsers(<any>{}))).toBeNull();
  });
});
