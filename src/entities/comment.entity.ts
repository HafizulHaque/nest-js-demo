import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Topic } from "./topic.entity";

@Entity()
export class Comment {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  text: string;

  @ManyToOne(type => User, user => user.comments)
  user: User;

  @ManyToOne(type => Comment, comment => comment.topic)
  topic: Topic

}