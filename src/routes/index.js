import { Suspense, lazy, Component } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
//layouts
import MainLayout from '../layout';

const Loadable = (Component) => (props) => {
     return (
          <Suspense>
               <Component {...props} />
          </Suspense>
     )
}

export default function Router() {
     return useRoutes([
          {
               path: '/',
               element: <MainLayout />,
               children: [
                    { element: <Navigate to="/home" replace />, index: true },
                    { path: 'home', element: <HomgPage /> },
               ]
          }
     ])
}

const HomgPage = Loadable(lazy(() => import('../pages/Home')));