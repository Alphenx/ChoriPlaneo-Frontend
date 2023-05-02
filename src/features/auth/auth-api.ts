import { UserLogin, UserRegister } from '../users/user.model';

export const sendUserForSignUp = async (userSignUp: UserRegister) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/auth/register`,
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userSignUp),
    },
  );

  return response;
};

export const sendUserForLogIn = async (userLogin: UserLogin) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userLogin),
  });

  return response;
};
