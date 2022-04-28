import { ApiProperty } from "@nestjs/swagger";

export class AddRoleDto {

  @ApiProperty({ example: "1", description: "Ид пользователя"})
  readonly userId: number;

  @ApiProperty({ example: "ADMIN", description: "Значение роли"})
  readonly value: string;
}