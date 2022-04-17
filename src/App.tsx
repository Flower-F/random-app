import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from './containers/Home';

const Picture = lazy(() => import('./containers/Picture'));
const Start = lazy(() => import('./containers/Start'));
const Article = lazy(() => import('./containers/Article'));

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='home' element={<Home />}></Route>
      <Route
        path='picture'
        element={
          <Suspense fallback={<>Loading...</>}>
            <Picture />
          </Suspense>
        }
      ></Route>
      <Route
        path='article'
        element={
          <Suspense fallback={<>Loading...</>}>
            <Article />
          </Suspense>
        }
      ></Route>
      <Route
        path='start'
        element={
          <Suspense fallback={<>Loading...</>}>
            <Start />
          </Suspense>
        }
      ></Route>
      <Route
        path='*'
        element={
          <main style={{ padding: '1rem' }}>
            <p>404 Not Found</p>
          </main>
        }
      />
    </Routes>
  );
};

export default App;
