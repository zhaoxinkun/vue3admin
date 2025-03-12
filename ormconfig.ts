// 导入所需的实体
import { UserEntity } from './src/user/user.entity';
import { ProfileEntity } from './src/user/profile.entity';
import { LogEntity } from './src/log/log.entity';
import { RolesEntity } from './src/roles/roles.entity';

// 配置orm
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

export const connectionParams = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3090,
  username: 'root',
  password: 'root',
  database: 'vue3admin',
  entities: [UserEntity, ProfileEntity, LogEntity, RolesEntity],
  synchronize: true,
  logging: ['error'],
} as TypeOrmModuleOptions;

// 拿到实例,方便测试
const AppDataSource=new DataSource({
  ...connectionParams,
  migrations: ['src/migrations/**'],
  subscribers: [],
} as DataSourceOptions)

export default AppDataSource;

// 测试链接
// 对于生成的数据库连接，我们可以使用以下代码进行初始化测试：
AppDataSource.initialize().then(async () => {
  console.log('Data Source has been initialized!');
  const res = await AppDataSource.manager.find(UserEntity);
  console.log('Here you can setup and run express / fastify / any other framework.', res);
}).catch((err) => {
  console.error('Error during Data Source initialization', err);
});