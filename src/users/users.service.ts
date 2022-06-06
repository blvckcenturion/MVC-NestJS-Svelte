import { User, UserDocument } from './schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async create(createUser: User): Promise<User> {
    createUser.password = await bcrypt.hash(createUser.password, 10);
    const createdUser = new this.userModel(createUser);
    return await createdUser.save();
  }

  async findOne(email: string): Promise<User> {
    return this.userModel.findOne({ email: email }).exec();
  }
}
