import { Conference, ConferenceSchema } from './conference.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: Conference.name, schema: ConferenceSchema },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
