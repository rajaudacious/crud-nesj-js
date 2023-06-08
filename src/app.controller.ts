import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
// import { AppService } from './app.service';
// import { User } from './user.models';
// import { UserUpdateDto } from './userUpdate.dto';

@Controller()
export class AppController {
//   constructor(private readonly appService: AppService) {}

//  @UsePipes(ValidationPipe) 
//  @Post()
//  async createUser(@Body() userDto:UserUpdateDto) :Promise<User>{
//   return this.appService.createUser(userDto)
//  }

//  @Get()
//  readUser(){
//   return this.appService.readUser()
//  }

//  @Get(':id')
//  async getUser(@Param('id') id: string):Promise<User>{
//   return this.appService.getUser(id);
//  }

//  @Put(':id')
//  async updateUser(@Param('id',new ValidationPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: string, @Body() updateData:UserUpdateDto)
//  :Promise<User>{
//   return this.appService.updateUser(id,updateData)
//  }

//  @Delete(':id')
//  async deleteUser(@Param('id') id:string){
//   return this. appService.deleteUser(id)
//  }

}
