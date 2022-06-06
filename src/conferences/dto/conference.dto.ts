import { Participant } from 'src/participants/schemas/participant.schema';

export class Conference {
  public name: string;
  public startDate: Date;
  public endDate: Date;
  public description: string;
  public presenters: string[];
  public participants: Participant[];
  public country: string;
  public city: string;
  public image: string;
  public address: string;
  public addressDetails?: string;
}
