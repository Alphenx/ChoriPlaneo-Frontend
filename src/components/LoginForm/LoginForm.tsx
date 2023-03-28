import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectAuthSlice,
  sendUserForLogInAsync,
} from '../../features/auth/auth-slice';
import { UserLogin } from '../../features/auth/user.model';
import Loading from '../../shared/components/Loading/Loading';
import { AuthStatus } from '../../shared/models/api-status';

import {
  LoginFormStyled,
  LoginButtonStyled,
  FeedBackStyled,
} from './LoginStyled';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { loginStatus, responseMsg } = useAppSelector(selectAuthSlice);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginStatus === AuthStatus.SUCCESS) {
      navigate('/home', { replace: true });
    }
  }, [loginStatus, navigate]);

  const generateFeedback = () => {
    switch (loginStatus) {
      case AuthStatus.LOADING:
        return <Loading width={80} />;
      case AuthStatus.SUCCESS:
        return (
          <FeedBackStyled authStatus={AuthStatus.SUCCESS}>
            {responseMsg}
          </FeedBackStyled>
        );
      case AuthStatus.ERROR:
        return (
          <FeedBackStyled authStatus={AuthStatus.ERROR}>
            {responseMsg}
          </FeedBackStyled>
        );

      default:
        return;
    }
  };

  return (
    <LoginFormStyled
      onSubmit={e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const userData: UserLogin = Object.fromEntries(form) as UserLogin;
        dispatch(sendUserForLogInAsync(userData));
      }}
    >
      <div>{generateFeedback()}</div>
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
          placeholder="Password"
          type="password"
          name="password"
          id="password"
          pattern="[a-zA-Z0-9]{3,30}"
          required
        />
      </label>

      <p className="login-link">
        You don't have an account? <Link to={'/register'}>Sign up</Link>
      </p>
      <p>
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </p>

      <LoginButtonStyled type="submit">Log in</LoginButtonStyled>
    </LoginFormStyled>
  );
};

export default LoginForm;
