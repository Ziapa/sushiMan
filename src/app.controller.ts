import {Controller, Get} from "@nestjs/common";
import {AppServices} from "./app.services";


@Controller('/api')
export class AppController {

    constructor(private appService: AppServices) {
    }

    @Get('/users')
    getUsers() {
       return this.appService.getUsers()
    }
}