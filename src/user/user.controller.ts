import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { User } from "../user/user.models";
import { UserUpdateDto } from "../user/userUpdate.dto";
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

 @UsePipes(ValidationPipe) 
 @Post('add')
 async createUser(@Body() userDto:UserUpdateDto) :Promise<User>{
  return this.userService.createUser(userDto)
 }

 @Get('all')
 readUser(){
  return this.userService.readUser()
 }

 @Get('detail/:id')
 async getUser(@Param('id') id: string):Promise<User>{
  return this.userService.getUser(id);
 }

 @Put(':id')
 async updateUser(@Param('id',new ValidationPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: string, @Body() updateData:UserUpdateDto)
 :Promise<User>{
  return this.userService.updateUser(id,updateData)
 }

 @Delete(':id')
 async deleteUser(@Param('id') id:string){
  return this. userService.deleteUser(id)
 }

}
