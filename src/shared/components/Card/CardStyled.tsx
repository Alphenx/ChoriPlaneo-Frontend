import styled from 'styled-components';

export const CardStyled = styled.article`
  color: var(--main-color-contrast);
  background-color: var(--main-color-light);
  border-radius: var(--radius-s);

  width: 300px;

  .creator-info {
    display: flex;
    gap: 20px;
    padding: 0.5rem 1rem;

    img {
      width: 40px;
      border-radius: var(--radius-xl);
      background-color: var(--base-color-text-light);
    }

    p {
      height: 100%;
      margin: auto 0;
    }
  }

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }
  .plan-info {
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 5px;

    text-overflow: ellipsis;

    /* Needed to make it work */
    overflow: hidden;
    white-space: nowrap;

    h2 {
      font-family: var(--main-font-bold);
      font-size: var(--font-size-s);
    }

    h3 {
      font-family: var(--main-font-regular);
      font-size: var(--font-size-xs);
    }

    p {
      font-family: var(--main-font-light);
      font-size: var(--font-size-xxs);

      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .buttons {
    margin: 0.5rem auto;
    justify-content: space-between;
    width: 100%;
    display: flex;
  }
`;

interface ButtonStyleProps {
  styles: 'filled' | 'outlined';
}

export const CardButtonStyled = styled.button<ButtonStyleProps>`
  background-color: ${props =>
    props.styles === 'outlined' ? 'transparent' : 'var(--main-color)'};

  color: ${props =>
    props.styles === 'outlined'
      ? 'var(--main-color)'
      : 'var(--base-color-text-light)'};

  border: var(--main-color) 2px solid;
  font-size: var(--font-size-s);
  font-family: var(--main-font-bold);
  border-radius: var(--radius-l);
  padding: 0.5rem 1rem;
  :hover {
    cursor: pointer;
    scale: 1.08;
  }
`;
