import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from '@/app/user/user.service';
import { IParams } from '@/utils/interfaces';
import { Author } from '@/decorators/author.decorator';
import { ApiSecurity } from '@nestjs/swagger';

@ApiSecurity("bearer")
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  async getUsers(@Author() data: any, @Query() params?: IParams) {
    console.log(data)
    return this.userService.getUsers(params);
  }
}
