import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/updateUserDto';
import { CommentService } from 'src/comment/comment.service';

@Controller('user')
export class UserController {

  constructor(
    private userService: UserService,
    private commentService: CommentService
  ){}

  @Get()
  findAll(){
    return this.userService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number){
    return this.userService.findOne(id);
  }

  @Get(':id/comments')
  getUserComments(@Param("id") id: number){
    return this.commentService.getUserComments(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto){
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() UpdateUserDto: UpdateUserDto){
    return this.userService.update(id, UpdateUserDto);
  }


}
