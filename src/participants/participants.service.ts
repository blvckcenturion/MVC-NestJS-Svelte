import { Participant, ParticipantDocument } from './schemas/participant.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ParticipantsService {
  constructor(
    @InjectModel(Participant.name)
    private participantModel: Model<ParticipantDocument>,
  ) {}

  async create(createParticipant: Participant): Promise<Participant> {
    createParticipant.password = await bcrypt.hash(
      createParticipant.password,
      10,
    );
    const createdParticipant = new this.participantModel(createParticipant);
    return await createdParticipant.save();
  }

  async findOne(email: string): Promise<Participant> {
    return this.participantModel.findOne({ email: email }).exec();
  }
}
