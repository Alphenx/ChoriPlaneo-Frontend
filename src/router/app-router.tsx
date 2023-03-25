import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layout/AppLayout/AppLayout';
import MainLayout from '../layout/MainLayout/MainLayout';
import CreatePlan from '../pages/CreatePlan/CreatePlan';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import MyPlans from '../pages/MyPlans/MyPlans';
import NotFound from '../pages/NotFound/NotFound';
import Register from '../pages/Register/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/app',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
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
