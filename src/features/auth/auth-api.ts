import { UserLogin, UserRegister } from './user.model';

export const sendUserForSignUp = async (userSignUp: UserRegister) => {
  const response = await fetch(
    'https://adrian-garcia-final-project-back-202301.onrender.com/auth/register',
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
  const response = await fetch(
    'https://adrian-garcia-final-project-back-202301.onrender.com/auth/login',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userLogin),
    },
  );

  return response;
};
