import styled from 'styled-components';

export const MainLayoutStyled = styled.div`
  font-family: var(--main-font-regular);
  max-width: 1440px;
  margin: 15rem auto;

  @media (max-width: 426px) {
    margin: 5rem auto;
  }
`;
