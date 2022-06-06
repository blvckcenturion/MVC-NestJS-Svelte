import { UsersService } from './users.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUser: any) {
    return await this.usersService.create(createUser);
  }
}
