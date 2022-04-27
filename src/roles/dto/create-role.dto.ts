import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {

  @ApiProperty({ example: "ADMIN", description: "Администротор"})
  readonly value: string;

  @ApiProperty({ example: "Может все!", description: "Описание роли"})
  readonly description: string;
}