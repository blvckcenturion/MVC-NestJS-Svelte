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

  async findAll(query?: any): Promise<Conference[]> {
    if (
      query?.hasOwnProperty('startDate') &&
      query?.hasOwnProperty('endDate')
    ) {
      return this.conferenceModel
        .find({
          startDate: {
            $gte: query.startDate,
            $lte: query.endDate,
          },
        })
        .exec();
    }
    // {
    //   startDate: {
    //     $gte: Date.now(),
    //   },
    // }
    return (await this.conferenceModel.find().exec()).reduce((acc, value) => {
      if (acc.filter((item) => item.city === value.city).length === 0) {
        acc.push({
          city: value.city,
          conferences: [],
        });
      }
      const index = acc.findIndex((item) => item.city === value.city);
      acc[index].conferences.push(value);
      return acc;
    }, []);
  }

  async findByCreator(userId: string) {
    return this.conferenceModel.find({ userId }).exec();
  }

  async findByParticipant(userId: string) {
    return this.conferenceModel.find({ participants: userId }).exec();
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

  async addParticipant(id: string, participantId: string) {
    const conference = await this.conferenceModel.findOne({ _id: id }).exec();
    if (conference.userId !== participantId) {
      await conference
        .updateOne({
          $addToSet: {
            participants: participantId,
          },
        })
        .exec();
    } else {
      throw new Error('You cannot add yourself to your own conference');
    }
  }

  async removeParticipant(id: string, participantId: string) {
    const conference = await this.conferenceModel.findOne({ _id: id }).exec();
    if (conference.userId !== participantId) {
      await conference
        .updateOne({
          $pull: {
            participants: participantId,
          },
        })
        .exec();
    } else {
      throw new Error('You cannot remove yourself from your own conference');
    }
  }
}
