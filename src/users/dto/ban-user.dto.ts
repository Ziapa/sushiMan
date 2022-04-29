import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class BanUserDto {

  @ApiProperty({ example: "1", description: "Ид пользователя"})
  @IsInt({message: "Должно быть число"})
  readonly userId: number;

  @ApiProperty({ example: "Хулиганство", description: "Причина бана"})
  @IsString({message: "Должно быть строкой"})
  readonly banReason: string;
}