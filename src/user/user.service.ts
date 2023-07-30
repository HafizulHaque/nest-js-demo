import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UserService {

  findOne(userId: string){
    return ({
      id: userId
    })
  }

  create(createUserDto: CreateUserDto){
    return "new user created"
  }
  
}
