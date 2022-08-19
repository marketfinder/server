import { IsEmpty, IsNumber, IsString } from "class-validator";

export class UpdateAnswerContactusDto {

    @IsString()
    @IsEmpty()
    answer: string

    @IsNumber()
    @IsEmpty()
    status: number
}