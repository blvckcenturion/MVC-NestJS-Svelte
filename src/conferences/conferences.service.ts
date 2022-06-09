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

  async findAll(query: any): Promise<Conference[]> {
    if (query.hasOwnProperty('startDate') && query.hasOwnProperty('endDate')) {
      return this.conferenceModel
        .find({
          startDate: {
            $gte: query.startDate,
            $lte: query.endDate,
          },
        })
        .exec();
    }
    return this.conferenceModel.find().exec();
  }

  async findOne(id: string): Promise<Conference> {
    return this.conferenceModel.findOne({ _id: id }).exec();
  }

  async delete(id: string, userId: string) {
    const deletedConference = await this.conferenceModel
      .findOne({
        _id: id,
        userId,
      })
      .remove()
      .exec();
    return deletedConference;
  }

  async update(
    id: string,
    userId: string,
    updateConference: ConferenceDto,
  ): Promise<Conference> {
    const updatedConference = await this.conferenceModel

      .findOneAndUpdate(
        {
          _id: id,
          userId,
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

  async addParticipant(
    id: string,
    userId: string,
    participantId: string,
  ): Promise<Conference> {
    const updatedConference = await this.conferenceModel
      .findOneAndUpdate(
        {
          _id: id,
          userId,
        },
        {
          $push: {
            participants: participantId,
          },
        },
        {
          new: true,
        },
      )
      .exec();
    return updatedConference;
  }
  // async findByUserId(userId: string): Promise<Conference[]> {
  //   return this.conferenceModel.find({ userId }).exec();
  // }
}
