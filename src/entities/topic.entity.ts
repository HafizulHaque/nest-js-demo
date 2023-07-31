import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./comment.entity";

@Entity()
export class Topic {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false, unique: true})
  title: string;

  @Column({nullable: false, unique: true})
  description: string;

  @OneToMany(type => Comment, comment => comment.topic)
  comments: Comment[]

}