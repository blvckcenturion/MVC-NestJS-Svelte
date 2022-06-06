import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
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

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateConference: any) {
    return await this.conferenceService.update(id, updateConference);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.conferenceService.delete(id);
  }
}
