import { Injectable, Param } from '@nestjs/common';
import { User, UserDocument } from './user.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserUpdateDto } from './userUpdate.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>
  ){}

  //creating a user 
  async createUser(user:UserUpdateDto): Promise<User>{
    const newUser = new this.userModel(user)
    return newUser.save()
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