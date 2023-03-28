import styled from 'styled-components';

interface CardStyledProps {
  cardType: string;
  detail?: boolean;
}

export const CardStyled = styled.article<CardStyledProps>`
  color: var(--base-color-text-dark);
  background-color: var(--main-color-light);
  border-radius: var(--radius-s);

  width: ${props => (props.detail ? '100%' : '300px')};

  :hover {
    transform: ${props =>
      props.detail ? 'translateY(0)' : 'translateY(-10px)'};
    transition: all 500ms;
  }

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
      text-overflow: ellipsis;
      img {
        width: 40px;
        border-radius: var(--radius-xl);
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

  .plan-img {
    width: 100%;
    height: ${props => (props.detail ? '450px' : '200px')};
    object-fit: cover;
  }

  .plan-info,
  .plan-info-extra {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 5px;

    h2 {
      font-family: var(--main-font-bold);
      font-size: var(--font-size-s);
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    h3 {
      font-family: var(--main-font-regular);
      font-size: var(--font-size-xs);
    }

    p {
      font-family: var(--main-font-light);
      font-size: var(--font-size-xxs);

      text-overflow: ellipsis;
      white-space: ${props => (props.detail ? 'normal' : 'nowrap')};
      overflow: hidden;
    }
  }
  .plan-info-extra {
    display: ${props => (props.detail ? 'flex' : 'none')};
  }

  .bottom-label {
    display: ${props => (props.cardType !== 'public' ? 'none' : 'flex')};
    gap: 2rem;
    padding: 0.5rem 1rem 1rem;
    justify-content: space-between;
    width: 100%;
  }
`;
