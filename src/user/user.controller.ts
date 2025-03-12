import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  // 查找所有用户
  @Get()
  find() {
    return this.userService.find();
  }

  // 创建用户
  @Post()
  create(@Body() users: userInterface | userInterface[]): Promise<userInterface | userInterface[]> {
    return this.userService.create(users);
  }
}
