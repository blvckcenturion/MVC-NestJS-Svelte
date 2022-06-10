import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { ConferencesService } from './conferences.service';
import { ConferencesController } from './conferences.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Conference, ConferenceSchema } from './schemas/conference.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: Conference.name, schema: ConferenceSchema },
    ]),
    AuthModule,
  ],
  providers: [ConferencesService],
  controllers: [ConferencesController],
  exports: [ConferencesService],
})
export class ConferencesModule {}
