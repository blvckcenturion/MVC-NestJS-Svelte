import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Patch,
  Request,
  UseGuards,
  Query,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ConferencesService } from './conferences.service';

@Controller('conferences')
export class ConferencesController {
  constructor(private readonly conferenceService: ConferencesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Request() req, @Body() createConference: any) {
    createConference.userId = req.user.userId;
    return await this.conferenceService.create(createConference);
  }

  @Get('/')
  async findAll(@Query() query: any) {
    return await this.conferenceService.findAll(query);
  }
  @UseGuards(JwtAuthGuard)
  @Get('/creator')
  async findAllByUser(@Request() req) {
    return await this.conferenceService.findByCreator(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/participant')
  async findAllByParticipant(@Request() req) {
    return await this.conferenceService.findByParticipant(req.user.userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.conferenceService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Request() req,
    @Param('id') id: string,
    @Body() updateConference: any,
  ) {
    return await this.conferenceService.update(
      id,
      req.user.userId,
      updateConference,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/participants')
  async addParticipant(@Request() req, @Param('id') id: string) {
    return await this.conferenceService.addParticipant(id, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/participants')
  async removeParticipant(@Request() req, @Param('id') id: string) {
    return await this.conferenceService.removeParticipant(id, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Request() req, @Param('id') id: string) {
    return await this.conferenceService.delete(id, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id/participants')
  async findAllParticipants(@Param('id') id: string) {
    return await this.conferenceService.findAllParticipants(id);
  }
}
