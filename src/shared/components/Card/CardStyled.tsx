import styled from 'styled-components';

interface CardStyledProps {
  cardType: 'public' | 'myplans' | 'recommended';
}

export const CardStyled = styled.article<CardStyledProps>`
  color: var(--main-color-contrast);
  background-color: var(--main-color-light);
  border-radius: var(--radius-s);

  width: 300px;

  button {
    height: 40px;
  }

  .top-label {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 0.5rem 1rem;
    height: 56px;

    .creator-info {
      display: ${props => (props.cardType !== 'myplans' ? 'flex' : 'none')};
      gap: 1rem;
      img {
        width: 40px;
        border-radius: var(--radius-xl);
        background-color: var(--base-color-text-light);
      }
      h4 {
        font-family: var(--main-font-bold);
        font-size: var(--font-size-s);
      }
      p {
        font-family: var(--main-font-light);
        font-size: var(--font-size-xs);
      }
    }

    .close-btn {
      display: ${props => (props.cardType === 'public' ? 'none' : 'block')};
    }

    .edit-share {
      display: ${props => (props.cardType === 'myplans' ? 'flex' : 'none')};
      gap: 1rem;
    }
  }

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }
  .plan-info {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 5px;

    text-overflow: ellipsis;
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

  .bottom-label {
    display: ${props => (props.cardType !== 'public' ? 'none' : 'flex')};
    gap: 2rem;
    padding: 0.5rem 1rem 1rem;
    justify-content: space-between;
    width: 100%;
  }
`;
