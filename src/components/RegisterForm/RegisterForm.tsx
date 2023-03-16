import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectAuthSlice,
  sendUserForSignUpAsync,
} from '../../features/auth/auth-slice';
import { UserRegister } from '../../features/auth/user.model';
import Loading from '../../shared/components/Loading/Loading';
import { RegisterStatus } from '../../shared/models/api-status';
import {
  FeedBackStyled,
  RegisterButtonStyled,
  RegisterFormStyled,
} from './RegisterStyled';

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const { registerStatus, responseMsg } = useAppSelector(selectAuthSlice);
  const [isPswRepeated, handlePswRepeated] = useState(true);

  const generateFeedback = () => {
    switch (registerStatus) {
      case RegisterStatus.LOADING:
        return <Loading />;
      case RegisterStatus.SUCCESS:
        return (
          <FeedBackStyled authStatus={RegisterStatus.SUCCESS}>
            {responseMsg}
          </FeedBackStyled>
        );
      case RegisterStatus.ERROR:
        return (
          <FeedBackStyled authStatus={RegisterStatus.ERROR}>
            {responseMsg}
          </FeedBackStyled>
        );
      default:
        return;
    }
  };

  return (
    <RegisterFormStyled
      onSubmit={e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const userData: UserRegister = Object.fromEntries(form) as UserRegister;
        if (userData.password === userData.repeatedPassword) {
          handlePswRepeated(true);
          delete userData.repeatedPassword;
          dispatch(sendUserForSignUpAsync(userData));
        } else {
          handlePswRepeated(false);
        }
      }}
    >
      <div>{generateFeedback()}</div>

      <label role={'complementary'}>
        <span>Name:</span>
        <input
          placeholder="Name"
          type="text"
          name="name"
          id="name"
          pattern="[a-zA-Z ]{3,30}"
          required
        />
      </label>
      <label role={'complementary'}>
        <span>Email:</span>
        <input
          placeholder="Email"
          type="email"
          name="email"
          id="email"
          required
        />
      </label>
      <label role={'complementary'}>
        <span>Password:</span>
        <input
          data-testid="passwordID"
          className={isPswRepeated ? '' : 'notMatch'}
          placeholder="Password"
          type="password"
          name="password"
          id="password"
          pattern="[a-zA-Z0-9]{3,30}"
          required
        />
      </label>
      <label role={'complementary'}>
        <span>Repeat password:</span>
        <input
          className={isPswRepeated ? '' : 'notMatch'}
          placeholder="Repeat password"
          name="repeatedPassword"
          id="repeatedPassword"
          type="password"
          required
        />
      </label>

      <p className="login-link">
        Already have an account? <a href="/gg">Log in</a>
      </p>
      <p>
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </p>

      <RegisterButtonStyled type="submit">Sign in</RegisterButtonStyled>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
