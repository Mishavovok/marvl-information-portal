import { Component } from 'react';
import AppHeader from './components/appHeader/AppHeader';
import RandomChar from './components/randomChar/RandomChar';
import CharList from './components/charList/CharList';
import CharInfo from './components/charInfo/CharInfo';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

import decoration from './resourcse/img/vision.png';

class App extends Component {
  state = {
    selectedChar: null,
  };

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id,
    });
  };

  render() {
    return (
      <div className="app">
        <AppHeader />
        <main>
          <ErrorBoundary>
            <RandomChar />
          </ErrorBoundary>
          <div className="char__content">
            <ErrorBoundary>
              <CharList onCharSelected={this.onCharSelected} />
            </ErrorBoundary>
            <ErrorBoundary>
              <CharInfo charId={this.state.selectedChar} />
            </ErrorBoundary>
          </div>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    );
  }
}

export default App;
