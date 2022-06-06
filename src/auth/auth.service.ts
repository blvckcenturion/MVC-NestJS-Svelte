import { Injectable } from '@nestjs/common';
import { ParticipantsService } from '../participants/participants.service';
@Injectable()
export class AuthService {
  constructor(private participantsService: ParticipantsService) {}

  async validateParticipant(email: string, password: string): Promise<any> {
    const participant = await this.participantsService.findOne(email);
    if (participant && participant.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = participant;
      return result;
    }
    return null;
  }
}
