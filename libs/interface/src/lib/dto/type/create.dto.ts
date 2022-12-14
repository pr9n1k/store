import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class createTypeDto {
    @ApiProperty({
        description: 'Название категории',
        type: String,
        example: 'Телефон'
    })
    @IsNotEmpty({message:'Поле name не может быть пустым'})
    name!: string;
}