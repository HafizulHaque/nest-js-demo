import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {

  constructor(
    @InjectRepository(Comment) private readonly commentRepo: Repository<Comment>
  ){}

  async getUserComments(userId: number){
    return await this.commentRepo.find({
      where: {
        
      }
    })
  }
}
