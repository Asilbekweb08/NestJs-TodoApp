import { Body, Controller, Get, Injectable, Param, Patch, Post, Req } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./users.service";
import { UpdateDto } from "./dto/update-user.dto";
import { LoginDto } from "./dto/login-user.dto";
@Controller('auth')
export class UsersController{
    constructor(private readonly UserService:UserService){}
    @Post('create')
    create(@Body() dto:CreateUserDto){
        return this.UserService.create(dto)
    }

    @Get()
    findAll(){
        return this.UserService.findAll()
    }
    @Patch(":id")
    update(@Param('id') id: string, @Body() dto:UpdateDto){
        return this.UserService.update(+id,dto)
    }
    @Post("login")
    login(@Body() dto:LoginDto){
        return this.UserService.login(dto)

    }
    
}



