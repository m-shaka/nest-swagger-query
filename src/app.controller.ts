import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MyQueryParam } from './app.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Query('q') q: Date): string {
    return this.appService.getHello();
  }

  @Get('/class')
  classQuery(@Query() q: MyQueryParam): string {
    return this.appService.getHello();
  }

}
