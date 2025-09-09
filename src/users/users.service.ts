import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private users: (CreateUserDto & { id: number })[] = [];
  create(dto: CreateUserDto) {
    const user = {
      id: Date.now(),
      ...dto,
    };
    this.users.push(user);
    return user;
  }
  findAll() {
    return this.users;
  }
  update(id: number, dto: UpdateDto) {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex === -1) return null;

    const existingUser = this.users[userIndex];
    const updatedUser = { ...existingUser, ...dto };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }
}
