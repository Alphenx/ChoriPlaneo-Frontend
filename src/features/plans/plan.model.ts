import User, { UserInfo } from '../users/user.model';

type Creator = Pick<User, 'email' | 'name'> & { profileURL?: string };
type CreatorInfo = Pick<UserInfo, 'email' | 'name' | 'savedPlans'> & {
  profileURL?: string;
};
export interface Plan {
  _id: string;
  creator: CreatorInfo;
  title: string;
  description: string;
  place: string;
  status: string | undefined;
  date: string;
  planImgURL?: string;
  registeredUsers: Creator[];
}
