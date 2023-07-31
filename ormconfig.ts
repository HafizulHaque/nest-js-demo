import { Topic } from 'src/entities/topic.entity';
import { User } from 'src/entities/user.entity';
import { Comment } from 'src/entities/comment.entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'nestapp',
  username: 'nestappuser',
  password: 'secret123',
  entities: [User, Comment, Topic],
  synchronize: true,
  logging: true
}

export default config;