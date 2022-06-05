import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Conference, ConferenceDocument } from './schemas/conference.schema';
import { Conference as ConferenceDto } from './dto/conference.dto';

// Controllers should handle HTTP requests and delegate more complex tasks to providers.
// Facade pattern is used to provide a simplified interface to the underlying services.
@Injectable()
export class ConferencesService {
  constructor(
    @InjectModel(Conference.name)
    private conferenceModel: Model<ConferenceDocument>,
  ) {}

  async create(createConference: ConferenceDto): Promise<Conference> {
    const createdConference = new this.conferenceModel(createConference);
    return await createdConference.save();
  }

  async findAll(): Promise<Conference[]> {
    return this.conferenceModel.find().exec();
  }

  async findOne(id: string): Promise<Conference> {
    return this.conferenceModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedConference = await this.conferenceModel
      .findByIdAndRemove({
        _id: id,
      })
      .exec();
    return deletedConference;
  }

  async update(
    id: string,
    updateConference: ConferenceDto,
  ): Promise<Conference> {
    const updatedConference = await this.conferenceModel
      .findByIdAndUpdate(
        {
          _id: id,
        },
        {
          $set: updateConference,
        },
        {
          new: true,
        },
      )
      .exec();
    return updatedConference;
  }
}
