import React from 'react';
import { Router, Link } from '@reach/router';

import About from './components/About';
import Home from './components/Home';
import Game from './components/Game';

const Popular = () => (
  <div>
    <h1>Popular Games</h1>
  </div>
);

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="about">About</Link>{' '}
        <Link to="games/23">Game #23</Link>{' '}
        <Link to="games/popular">Popular</Link>
      </nav>

      <Router>
        <Home path="/" />
        <About path="about" />
        <Game path="games/:id" />
        <Popular path="games/popular" />
      </Router>
    </div>
  );
}

export default App;
