import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {

  getUserComments(userId: string){
    return `comments of user with id ${userId}`
  }
}
