import styled from 'styled-components';

export const PlansCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px;
  margin-bottom: 10rem;
`;

interface StatusProps {
  status: 'idle' | 'loading' | 'failed';
}

export const FeedBackStyled = styled.div<StatusProps>`
  padding: 0 2rem;
  h3 {
    background-color: var(--red-color);

    font-family: var(--main-font-light);
    font-size: var(--font-size-xs);
    color: var(--base-color-text-light);

    border: none;
    border-radius: var(--radius-l);
    text-align: center;
    padding: 0.3rem;
    width: 100%;
    max-width: 800px;
    align-self: center;
    margin: 2rem auto;
  }
`;
