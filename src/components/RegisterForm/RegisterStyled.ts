import styled from 'styled-components';
import { AuthStatus } from '../../shared/models/api-status';

export const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  gap: 1rem;

  div {
    width: 100%;
    height: 2rem;
    margin-bottom: 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    font-family: var(--main-font-regular);
    font-size: var(--font-size-xxs);
    background-color: var(--base-color-bg);
    position: relative;

    :has(input:focus) {
      color: var(--main-color);
    }

    :has(:focus:required:invalid, .notMatch:not(:focus)) {
      color: var(--red-color);
    }

    span {
      margin-left: 10px;
      top: -8px;
      padding: 0 4px;
      position: absolute;
      background-color: var(--base-color-bg);
      width: fit-content;
    }

    .notMatch {
      outline: var(--border-m) var(--red-color);
      color: var(--red-color);
    }

    input {
      color: var(--base-color-contrast);
      width: 100%;
      height: 2.6rem;
      border: var(--border-s) var(--base-color-contrast);
      background-color: var(--base-color-bg);
      border-radius: var(--radius-xs);
      padding: 0.5rem;

      :focus {
        border: none;
        outline: var(--border-m) var(--main-color);
        color: var(--main-color);
      }

      :invalid:focus {
        outline: var(--border-m) var(--red-color);
        color: var(--red-color);
      }
    }
  }

  p {
    color: var(--base-color-contrast);
    text-align: center;
    font-family: var(--main-font-light);
    font-size: var(--font-size-xxs);
    padding: 0rem 1.5rem;
  }

  .login-link {
    font-family: var(--main-font-light);
    font-size: var(--font-size-s);
    margin-bottom: 1rem;

    a {
      color: var(--main-color);
      font-family: var(--main-font-bold);
    }
  }
`;

export const RegisterButtonStyled = styled.button`
  :disabled {
    background-color: var(--main-color-light);
  }
  font-family: var(--main-font-bold);
  font-size: var(--font-size-s);
  background-color: var(--main-color);
  color: var(--base-color-text-light);
  border: none;
  border-radius: var(--radius-l);
  padding: 1rem;
  :hover {
    cursor: pointer;
    scale: 1.02;
  }
`;

interface AuthStatusProps {
  authStatus: AuthStatus.SUCCESS | AuthStatus.LOADING | AuthStatus.ERROR;
}

export const FeedBackStyled = styled.h3<AuthStatusProps>`
  background-color: ${props =>
    props.authStatus === AuthStatus.SUCCESS
      ? 'var(--green-color)'
      : 'var(--red-color)'};

  font-family: var(--main-font-light);
  font-size: var(--font-size-xs);
  color: var(--base-color-text-light);
  border: none;
  border-radius: var(--radius-l);
  text-align: center;
  padding: 0.3rem;
`;
