import { Plan } from '../plans/plan.model';

interface User {
  name: string;
  email: string;
  password: string;
  profileURL: string;
}

export interface UserInfo {
  name: string;
  email: string;
  profileURL: string;
  friends: User[];
  recommendedPlans: Plan[];
  savedPlans: Plan[];
  createdPlans: Plan[];
}

export type UserRegister = {
  name: string;
  email: string;
  password: string;
  repeatedPassword?: string;
};

export type UserLogin = Pick<User, 'email' | 'password'>;

export default User;
