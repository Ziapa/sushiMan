import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/user.model";
import { UsersModule } from "./users/users.module";
import { Role } from "./roles/roles.model";
import { RolesModule } from "./roles/roles.module";
import { UserRoles } from "./roles/user-roles.model";


@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRESS_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRESS_DB,
      models: [User, Role, UserRoles],
      autoLoadModels: true
    }),
    UsersModule,
    RolesModule
  ]
})
export class AppModule {
}