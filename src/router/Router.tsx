import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { LazyComponent } from '@/components';
import { Spinner } from '@/components';

const routes = [
  {
    path: '/',
    Component: lazy(() =>
      import('@/pages').then(({ HomePage }) => ({ default: HomePage })),
    ),
  },
];

const Router = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => {
        return (
          <Route
            path={path}
            key={path}
            element={
              <LazyComponent fallback={<Spinner />} Component={Component} />
            }
          ></Route>
        );
      })}
    </Routes>
  );
};

export default Router;
