import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from './containers/Home';
import Loading from './components/Loading';
import { ErrorBlock } from 'antd-mobile';

const Picture = lazy(() => import('./containers/Picture'));
const Start = lazy(() => import('./containers/Start'));
const Avatar = lazy(() => import('./containers/Avatar'));

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route
        path='picture'
        element={
          <Suspense fallback={<Loading />}>
            <Picture />
          </Suspense>
        }
      />
      <Route
        path='start'
        element={
          <Suspense fallback={<Loading />}>
            <Start />
          </Suspense>
        }
      />
      <Route
        path='avatar'
        element={
          <Suspense fallback={<Loading />}>
            <Avatar />
          </Suspense>
        }
      />
      <Route
        path='*'
        element={
          <main>
            <ErrorBlock status='default' fullPage />
          </main>
        }
      />
    </Routes>
  );
};

export default App;
