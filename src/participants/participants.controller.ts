import { ParticipantsService } from './participants.service';
import { Controller } from '@nestjs/common';
import { Post, Body } from '@nestjs/common';

@Controller('participants')
export class ParticipantsController {
  constructor(private readonly participantsService: ParticipantsService) {}

  @Post()
  async create(@Body() createParticipant: any) {
    return await this.participantsService.create(createParticipant);
  }
}
