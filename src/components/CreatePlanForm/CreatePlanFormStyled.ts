import styled from 'styled-components';
import { PlanStatus } from '../../shared/models/api-status';

export const CreateFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  div {
    width: 100%;
    height: 2rem;
    margin-bottom: 1rem;
  }

  .plan-img {
    border-radius: var(--radius-m);
    height: 170px;
    border: var(--border-m) var(--main-color);
    position: relative;
    margin-bottom: 1rem;
    span {
      font-family: var(--main-font-regular);
      font-size: var(--font-size-xxs);
      width: 100%;
      text-align: center;
      position: absolute;
      left: 50%;
      bottom: -20px;
      transform: translate(-50%, 0%);
    }

    input {
      visibility: hidden;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: var(--radius-m);
      border: none;
    }

    @media (min-width: 450px) {
      height: 250px;
    }
  }

  textarea {
    resize: vertical;
    padding: 0.5rem;
    border-radius: var(--radius-xs);
    border: var(--border-s) var(--base-color-contrast);
    background-color: var(--base-color-bg);
    color: var(--base-color-contrast);
    font-family: var(--main-font-regular);
    font-size: var(--font-size-xxs);
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
`;

interface ButtonProps {
  styles: string;
  width: string;
  padding: string;
}

export const CreateButtonStyled = styled.button<ButtonProps>`
  margin: 2rem auto;
  background-color: 'transparent';

  color: var(--main-color);
  width: ${props => props.width};
  padding: ${props => props.padding};

  border: var(--main-color) 2px solid;
  font-size: var(--font-size-s);
  font-family: var(--main-font-bold);
  border-radius: var(--radius-l);
  :hover {
    cursor: pointer;
    scale: 1.08;
  }
`;

export const InputLabelStyled = styled.label`
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
`;

export const CheckboxLabelStyled = styled.label`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 15px;
  p {
    font-family: var(--main-font-bold);
    font-size: var(--font-size-l);
  }

  input {
    position: relative;
    width: 50px;
    height: 25px;
    -webkit-appearance: none;
    background: #c6c6c6;
    outline: none;
    border-radius: 20px;
    box-shadow: inset 0 0 5px rgba(4, 0, 255, 0.2);
    transition: 0.7s;

    :checked {
      background: var(--main-color);
    }

    :before {
      content: '';
      position: absolute;
      width: 25px;
      height: 25px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: var(--base-color-text-light);
      transform: scale(1.1);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
      transition: 0.5s;
    }

    :checked:before {
      left: 25px;
    }
  }
`;
interface StatusProps {
  status: 'idle' | 'loading' | 'failed';
}

export const FeedBackStyled = styled.div<StatusProps>`
  padding: 0 2rem;
  h3 {
    background-color: ${props =>
      props.status === PlanStatus.SUCCESS
        ? 'var(--green-color)'
        : 'var(--red-color)'};

    font-family: var(--main-font-light);
    font-size: var(--font-size-xxs);
    color: var(--base-color-text-light);

    border: none;
    border-radius: var(--radius-l);
    text-align: center;
    padding: 0.3rem;
    width: 100%;
    max-width: 800px;
    align-self: center;
    margin: 1.5rem auto 0;
  }
`;
