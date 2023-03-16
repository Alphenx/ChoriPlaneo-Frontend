import React from 'react';
import styled from 'styled-components';

const LoadingImg = styled.div`
  width: 100%;
  text-align: center;

  img {
    width: 80px;
  }
`;
const Loading = () => {
  return (
    <LoadingImg>
      <img src="/assets/imgs/loading-points.gif" alt="Loading..." />
    </LoadingImg>
  );
};

export default Loading;
