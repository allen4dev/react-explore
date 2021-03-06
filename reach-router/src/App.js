import React from 'react';
import { Router, Link } from '@reach/router';

import About from './components/About';
import Home from './components/Home';
import Games from './components/Games';
import Game from './components/Game';

const Popular = () => (
  <div>
    <h1>Popular Games</h1>
  </div>
);

const NotFound = () => <div>Sorry, nothing here.</div>;

const Tags = () => <div>Show tags on /games</div>;

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="about">About</Link>{' '}
        <Link to="games">Games</Link>
        <Link to="about/us">About us</Link>
      </nav>

      {/* Multiple Routers */}
      <aside>
        <Router primary={false}>
          <Tags path="games/*" />
        </Router>
      </aside>

      <Router>
        <Home path="/" />
        <About path="about/*" />
        <Games path="games">
          <Game path=":id" />
          <Popular path="popular" />
        </Games>
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
