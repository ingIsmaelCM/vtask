import { Injectable } from '@nestjs/common';
import { IParams } from '@/utils/interfaces';

@Injectable()
export class UserService {


  async getUsers(params: IParams){
    return params;
  }
}
