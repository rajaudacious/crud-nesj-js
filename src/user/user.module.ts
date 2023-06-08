import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.models';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';



@Module({
    imports: [
        MongooseModule.forFeature([{name:'user',schema:UserSchema}]),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
          }),
    ],
    controllers: [
        UserController
    ],
    providers: [
        UserService
    ]
})
export class UserModule {}
