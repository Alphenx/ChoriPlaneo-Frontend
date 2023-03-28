import User from '../auth/user.model';

type Creator = Pick<User, 'email' | 'name'> & { profileURL?: string };
export interface Plan {
  _id: string;
  creator: Creator;
  title: string;
  description: string;
  place: string;
  status: string | undefined;
  date: string;
  planImgURL?: string;
  registeredUsers: Creator[];
}
