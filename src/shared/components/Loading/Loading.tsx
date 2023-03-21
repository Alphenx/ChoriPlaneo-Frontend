import React, { FC } from 'react';
import styled from 'styled-components';

const LoadingImg = styled.div`
  width: 100%;
  text-align: center;
`;
interface LoadingProps {
  width: number;
}

const Loading: FC<LoadingProps> = ({ width }) => {
  return (
    <LoadingImg>
      <img
        src="/assets/imgs/loading-points.gif"
        width={width}
        alt="Loading..."
      />
    </LoadingImg>
  );
};

export default Loading;
