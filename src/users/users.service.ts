import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login-user.dto';

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
  login(dto:LoginDto){
   const user = this.users.find(u=>u.name=dto.name)
    if(!user){
         return "user yuqq"
    }
    if(user.password!==dto.password){
        throw new Error('Parol hato')
    }
    return (dto.name)
  }

}
