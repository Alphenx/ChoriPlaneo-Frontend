import { Outlet } from 'react-router-dom';

import { MainLayoutStyled } from './MainLayoutStyled';

const MainLayout = () => {
  return (
    <MainLayoutStyled>
      <main>
        <Outlet />
      </main>
    </MainLayoutStyled>
  );
};

export default MainLayout;
