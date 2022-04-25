import {Injectable} from "@nestjs/common";


@Injectable()
export class AppServices {
    getUsers() {
        return [{id: 1, name: 'Ziapa'}]
    }
}