import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import addUserForm from '../components/addUserForm';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <p>This is a Error</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/adduser',
        Component: addUserForm,
      },
    ],
  },
]);
