import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ConferenceDocument = Conference & Document;

@Schema()
export class Conference {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  userId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [String], required: true })
  presenters: string[];

  @Prop({
    type: [{ type: [mongoose.Schema.Types.ObjectId], ref: 'User' }],
    required: true,
  })
  participants: string[];

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  address: string;

  @Prop()
  addressDetails: string;
}

export const ConferenceSchema = SchemaFactory.createForClass(Conference);
