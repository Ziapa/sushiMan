import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDto {

  @ApiProperty({ example: "ADMIN", description: "Администротор" })
  @IsString({ message: "Должно быть строкой" })
  readonly value: string;

  @ApiProperty({ example: "Может все!", description: "Описание роли" })
  @IsString({ message: "Должно быть строкой" })
  readonly description: string;
}