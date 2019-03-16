import React from 'react';
import { Router, Link } from '@reach/router';

const Something = () => {
  return (
    <div>
      <h2>Embedded Router</h2>
    </div>
  );
};

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="us">About us</Link>

      {/* Embedded Routers */}
      <Router>
        <Something path="us" />
      </Router>
    </div>
  );
}

export default About;
