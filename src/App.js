import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from './components/appHeader/AppHeader';
import { MainPage, ComicsPage } from './components/pages';
 
const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />}/>   
            <Route path="/comics" element={<ComicsPage />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
