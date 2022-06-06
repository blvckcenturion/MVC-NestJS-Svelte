import { ParticipantsModule } from '../participants/participants.module';

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  imports: [ParticipantsModule],
  providers: [AuthService],
})
export class AuthModule {}
