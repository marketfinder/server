import { IsEmpty, IsNumber, IsString } from "class-validator";

export class CreateNoticeDto {

    @IsString()
    @IsEmpty()
    title: string;

    @IsEmpty()
    @IsNumber()
    type: number;

    @IsString()
    @IsEmpty()
    content: string;
}
