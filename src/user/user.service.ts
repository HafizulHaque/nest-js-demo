import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/updateUserDto';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private readonly userRepo : Repository<User>
  ){}

  async findAll(){
    return await this.userRepo.find()
  }

  async findOne(userId: number){
    return await this.userRepo.findOne({
      where: {
        id: userId
      }
    })
  }

  async findUserComments(userId: number){
    return []
  }

  async create(createUserDto: CreateUserDto){
    let user = this.userRepo.create(createUserDto)
    return await this.userRepo.save(user)
  }

  async update(id: number, updateUserDto: UpdateUserDto){
    return await this.userRepo.update(id, updateUserDto);
  }
  
}
