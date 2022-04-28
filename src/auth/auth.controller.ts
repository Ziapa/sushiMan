import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { Role } from "../roles/roles.model";


@ApiTags("Авторизация")
@Controller("auth")
export class AuthController {

  constructor(private authService: AuthService) {
  }

  @ApiOperation({ summary:"Логинизация"})
  @ApiResponse({status: 200})
  @Post("login")
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @ApiOperation({ summary:"Регистрация"})
  @ApiResponse({status: 200})
  @Post("/registration")
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }
}
