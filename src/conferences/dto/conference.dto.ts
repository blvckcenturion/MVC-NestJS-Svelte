export class Conference {
  public userId: string;
  public name: string;
  public startDate: Date;
  public endDate: Date;
  public description: string;
  public presenters: string[];
  public participants: string[];
  public country: string;
  public city: string;
  public image: string;
  public address: string;
  public addressDetails?: string;
}
