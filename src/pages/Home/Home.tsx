import React from 'react';
import styled from 'styled-components';

const HomeSectionStyled = styled.section`
  text-align: center;
  width: 100%;
  height: 500px;

  background-image: url('https://miro.medium.com/v2/resize:fit:720/format:webp/1*y7ZgcnbxdF4aDgh-XaS1-Q.png');
  background-position: center;
  background-repeat: no-repeat;

  h1 {
    font-family: var(--main-font-bold);
    font-size: var(--font-size-xl);
  }
`;

const Home = () => {
  return (
    <HomeSectionStyled>
      <h1>Choriplaneo is coming soon!</h1>
    </HomeSectionStyled>
  );
};

export default Home;
