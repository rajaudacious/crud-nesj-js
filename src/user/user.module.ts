import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.models';
import { UserController } from './user.controller';
import { UserService } from './user.service';


@Module({
    imports: [
        MongooseModule.forFeature([{name:'user',schema:UserSchema}]),
    ],
    controllers: [
        UserController
    ],
    providers: [
        UserService
    ]
})
export class UserModule {}
