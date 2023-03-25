import User from '../auth/user.model';

type Creator = Pick<User, 'email' | 'name'> & { profileURL?: string };
export interface Plan {
  creator: Creator;
  title: string;
  description: string;
  place: string;
  status: string;
  date: Date;
  planImgURL?: string;
  registeredUsers: User[];
}
