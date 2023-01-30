import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from './components/appHeader/AppHeader';
import { MainPage, ComicsPage, Page404, SingleComicPage, REPO_NAME } from './components/pages';

const App = () => {
  return (
    <Router basename={`/${REPO_NAME}/`}>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route path="/comics/:comicId" element={<SingleComicPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </div>
    </Router> 
  );
};

export default App;
