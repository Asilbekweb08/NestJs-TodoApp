import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService{
    private users:CreateUserDto[] =[]

    create(dto:CreateUserDto){
        const user ={
             id: Date.now(),
            ...dto}
        this.users.push(user)
        return user
    }
    findAll(){
        return this.users
    }
}