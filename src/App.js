import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Spinner from './components/spinner/Spinner';
import {REPO_NAME} from './components/pages';

import AppHeader from './components/appHeader/AppHeader';
const Page404 = lazy(() => import('./components/pages/404'));
const MainPage = lazy(() => import('./components/pages/MainPage'));
const ComicsPage = lazy(() => import('./components/pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('./components/pages/singleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() =>
  import('./components/pages/singleCharacterLayout/SingleCharacterLayout'),
);
const SinglePage = lazy(() => import('./components/pages/SinglePage'));
const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/comics" element={<ComicsPage />} />
              <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType="comic"/>} />
              <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType="character"/>} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
