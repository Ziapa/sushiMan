import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {

  @ApiProperty({ example: "1", description: "Ид пользователя"})
  readonly userId: number;

  @ApiProperty({ example: "Хулиганство", description: "Причина бана"})
  readonly banReason: string;
}