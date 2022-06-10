import { ConferencesService } from './conferences/conferences.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import {
  Controller,
  Get,
  Render,
  UseGuards,
  Post,
  Request,
} from '@nestjs/common';

import { AuthService } from './auth/auth.service';

import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private conferencesService: ConferencesService,
  ) {}

  @Get()
  @Render('Home')
  async getHome() {
    const conferences = (await this.conferencesService.findAll()).reduce(
      (acc, value) => {
        if (acc.filter((item) => item.city === value.city).length === 0) {
          acc.push({
            city: value.city,
            conferences: [],
          });
        }
        const index = acc.findIndex((item) => item.city === value.city);
        acc[index].conferences.push(value);
        return acc;
      },
      [],
    );
    return { conferences };
  }

  @Get('/about')
  @Render('About')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getAbout() {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
