import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {
  }

  find() {
    return this.userRepository.find();
  }

  async create(users: userInterface | userInterface[]) {
    // 如果传入的是一个数组（多个用户）
    if (Array.isArray(users)) {
      // 创建多个用户实例
      const userEntities = users.map(user => this.userRepository.create(user));
      return await this.userRepository.save(userEntities); // 批量保存
    } else {
      const user = this.userRepository.create(users); // 创建单个用户实例
      return await this.userRepository.save(user); // 保存单个用户
    }
  }
}
