import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import UserDetals from '../components/UserDetals';
import Update from '../components/Update';

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
        path: 'users/:id',
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
        Component: UserDetals,
      },
      {
        path: 'update/:id',
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`),
        Component: Update,
      },
    ],
  },
]);
