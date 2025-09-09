import { Body, Controller, Get, Injectable, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./users.service";
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
}



