interface User {
  name: string;
  email: string;
  password: string;
  profileURL: string;
}

export type UserRegister = {
  name: string;
  email: string;
  password: string;
  repeatedPassword?: string;
};

export type UserLogin = Pick<User, 'email' | 'password'>;

export default User;
