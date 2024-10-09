import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {
    @Get('/hi')
    getHiRoute(){
        return 'Hi There!';
    }

    @Get('/bye')
    getByeRoute(){
        return 'Bye There!'
    }
}
