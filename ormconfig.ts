import { User } from 'src/entities/user.entity'
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'nestapp',
  username: 'nestappuser',
  password: 'secret123',
  entities: [User],
  synchronize: true,
  logging: true
}

export default config;