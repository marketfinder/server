import { IsEmail, IsEmpty, IsNumber, IsString } from "class-validator";

export class CreateContactusDto {

    @IsString()
    @IsEmpty()
    title: string;

    @IsEmpty()
    @IsNumber()
    type: number;

    @IsEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    @IsEmpty()
    content: string;
}
