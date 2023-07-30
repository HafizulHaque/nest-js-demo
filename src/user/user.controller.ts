import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';

@Controller('user')
export class UserController {

  constructor(
    private userService: UserService,
    private commentService: CommentService
  ){}

  @Get(":id")
  findOne(@Param("id") id: string){
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto){
    return this.userService.create(createUserDto);
  }

  @Get(':id/comments')
  getUserComments(@Param("id") id: string){
    return this.commentService.getUserComments(id);
  }

}
