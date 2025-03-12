import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionParams } from '../ormconfig';

@Module({
  imports: [
    UserModule,
    // 使用typeOrm
    TypeOrmModule.forRoot(connectionParams),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
