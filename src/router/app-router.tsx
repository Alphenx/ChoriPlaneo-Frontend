import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layout/AppLayout/AppLayout';
import CreatePlan from '../pages/CreatePlan/CreatePlan';
import Home from '../pages/Home/Home';
import MyPlans from '../pages/MyPlans/MyPlans';
import NotFound from '../pages/NotFound/NotFound';
import Auth from '../pages/Auth/Auth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Auth />,
      },
      {
        path: 'register',
        element: <Auth />,
      },
    ],
  },
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'create-plan',
        element: <CreatePlan />,
      },
      {
        path: 'my-plans',
        element: <MyPlans />,
      },
    ],
  },
]);
