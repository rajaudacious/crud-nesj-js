import { IsDate, IsNumber, IsString, } from "class-validator";

export class UserUpdateDto{
    static pass(name: string, pass: any) {
        throw new Error('Method not implemented.');
    }

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    password:string;

    dateAdded: Date;
}
