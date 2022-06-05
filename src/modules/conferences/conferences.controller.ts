import { Body, Controller, Post, Get, Delete, Param } from '@nestjs/common';
import { ConferencesService } from './conferences.service';

@Controller('conferences')
export class ConferencesController {
  constructor(private readonly conferenceService: ConferencesService) {}

  @Post()
  async create(@Body() createConference: any) {
    return await this.conferenceService.create(createConference);
  }

  @Get()
  async findAll() {
    return await this.conferenceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.conferenceService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.conferenceService.delete(id);
  }
}
