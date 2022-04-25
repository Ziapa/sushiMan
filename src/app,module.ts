import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppServices} from "./app.services";


@Module({
    controllers: [AppController],
    providers:[AppServices]
})
export class AppModule {
}