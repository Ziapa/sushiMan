import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({ example: "user@email.ru", description: "Почтовый адрес"})
  readonly email: string;

  @ApiProperty({ example: "123456789", description: "Пароль"})
  readonly password: string;
}