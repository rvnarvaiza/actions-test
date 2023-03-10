import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getSum(
    @Query('num_1', ParseIntPipe) num1: number,
    @Query('num_2', ParseIntPipe) num2: number,
  ) {
    return num1 + num2;
  }
}
