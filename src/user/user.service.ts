import { Injectable, Param, UnauthorizedException } from '@nestjs/common';
import { User, UserDocument } from "../user/user.models";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserUpdateDto } from "../user/userUpdate.dto";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
    // private userService: UserService,
    private jwtService: JwtService
  ){}

  //creating a user 
  async createUser(user:UserUpdateDto): Promise<User>{
    const newUser = new this.userModel(user)
    return newUser.save()
  }

  //login user
  async loginUser(name: string, pass: string): Promise<any> {
      
    const user = await this.userModel.findOne({name});
    console.log(user);
  if (user?.password !== pass) {
    throw new UnauthorizedException();
  }
  const { password, ...result } = user;
  // TODO: Generate a JWT and return it here
  // instead of the user object
  const payload = { sub: user.password, name: user.name };
  return {
      access_token: await this.jwtService.signAsync(payload),
    };
  // return result;
}
  // reading the user collection
  async readUser(){
    return this.userModel.find({})
    .then((user) =>{return user})
    .catch((err) => console.log(err)
    )
  }

  // Get single user
  async getUser(@Param('id') id:string) {
    return this.userModel.findOne({_id :id});
  }

  // Update the data 
  async updateUser(id,data):Promise<User>{
    return this.userModel.findByIdAndUpdate(id,data,{new:true})
  }

  // deleting data
  async deleteUser(id){
    return this.userModel.findByIdAndRemove(id)
  }
}