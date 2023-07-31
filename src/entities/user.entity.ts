import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./comment.entity";
import * as bcrypt from 'bcrypt'

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: false, nullable: false})
  name: string;

  @Column({unique: true, nullable: false})
  email: string;

  @Column({nullable: false})
  password: string;

  @OneToMany(type => Comment, comment => comment.user)
  comments: Comment[]


  @BeforeInsert()
  async hashPassword(){
    this.password = await bcrypt.hash(this.password, 10)
  }

}