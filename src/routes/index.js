import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';

import KanbanPage from '../pages/kanban';

// layouts
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';

// components
import LoadingScreen from '../components/LoadingScreen';

import MainLayout from '../layouts/main';
import Home from '../pages/home/Home';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: '/', element: <Home isReset /> }],
    },
    {
      path: '/kanban',
      element: <KanbanPage />,
    },

    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },

    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}

const NotFound = Loadable(lazy(() => import('../pages/Page404')));
