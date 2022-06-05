import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  @Render('Home')
  getHello() {
    return { message: 'I <3 Svelte!' };
  }

  @Get('/about')
  @Render('About')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getAbout() {}
}
