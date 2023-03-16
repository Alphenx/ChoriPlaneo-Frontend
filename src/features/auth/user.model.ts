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

export default User;
