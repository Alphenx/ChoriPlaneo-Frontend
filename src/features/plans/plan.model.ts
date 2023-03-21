import User from '../auth/user.model';

export interface Plan {
  creatorId: string;
  title: string;
  description: string;
  place: string;
  status: boolean;
  date: Date;
  planImgURL: string;
  registeredUsers: User[];
}
