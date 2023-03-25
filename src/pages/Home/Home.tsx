import React from 'react';
import styled from 'styled-components';
import AllPlansCardList from '../../components/AllPlansCardList/AllPlansCardList';

const HomeSectionStyled = styled.section`
  margin-top: 1rem;
`;

const Home = () => {
  return (
    <HomeSectionStyled>
      <AllPlansCardList />
    </HomeSectionStyled>
  );
};

export default Home;
