import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { UserSchema } from './user.models';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserSchema } from './user/user.models';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://company:company123@cluster0.4no35j8.mongodb.net/test?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'user',schema:UserSchema}])
  ],
  controllers: [
    AppController,
     UserController],
  providers: [
    AppService,
    UserService],
})
export class AppModule {}
