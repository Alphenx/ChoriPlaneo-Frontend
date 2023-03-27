import { FC } from 'react';
import styled from 'styled-components';

interface ButtonStyledProps {
  styles: string;
  width?: string;
  padding?: string;
  iconSize?: string;
}

interface ButtonProps extends ButtonStyledProps {
  value: string | any;
  className?: string;
  type?: 'button' | 'reset' | 'submit';
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  background-color: ${props =>
    props.styles === 'outlined' ? 'transparent' : 'var(--main-color)'};

  color: ${props =>
    props.styles === 'outlined'
      ? 'var(--main-color)'
      : 'var(--base-color-text-light)'};

  width: ${props => props.width};
  padding: ${props => props.padding};

  margin: 0 auto;
  height: 40px;
  border: var(--main-color) 2px solid;
  font-size: var(--font-size-s);
  font-family: var(--main-font-bold);
  border-radius: var(--radius-l);
  :hover {
    cursor: pointer;
    scale: 1.08;
  }

  position: relative;
  .icon {
    width: ${props => props.iconSize};
    height: ${props => props.iconSize};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const Button: FC<ButtonProps> = ({
  styles,
  width = '2.5rem',
  padding = '0.5rem 1rem',
  value,
  iconSize = '1.25rem',
  type = 'button',
}) => {
  return (
    <ButtonStyled
      styles={styles}
      width={width}
      padding={padding}
      iconSize={iconSize}
      type={type}
    >
      {value}
    </ButtonStyled>
  );
};

export default Button;
