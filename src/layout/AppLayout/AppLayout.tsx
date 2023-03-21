import { Outlet } from 'react-router-dom';
import Header from '../../shared/components/Header/Header';

import { AppLayoutStyled } from './AppLayoutStyled';

const AppLayout = () => {
  return (
    <AppLayoutStyled>
      <Header />
      <main>
        <Outlet />
      </main>
    </AppLayoutStyled>
  );
};

export default AppLayout;
