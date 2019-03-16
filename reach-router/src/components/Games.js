import React from 'react';
import { Link } from '@reach/router';

function Games({ children }) {
  return (
    <div>
      <h1>Games</h1>
      <nav>
        <Link to="23">Game #23</Link> <Link to="popular">Popular</Link>
      </nav>
      {children}
    </div>
  );
}

export default Games;
