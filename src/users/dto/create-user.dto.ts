import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

  @ApiProperty({ example: "user@email.ru", description: "Почтовый адрес" })
  @IsString({message: "Должно быть строкой"})
  @IsEmail({}, {message: "Некорректный email"})
  readonly email: string;

  @ApiProperty({ example: "123456789", description: "Пароль" })
  @IsString({message: "Должно быть строкой"})
  @Length(8,16, {message:"Не меньше 8 и не больше 16 символов"})
  readonly password: string;
}