import React from 'react';
import { Router } from '@reach/router';

const Something = () => {
  return (
    <div>
      <h2>Embedded Router</h2>
    </div>
  );
};

function About({ navigate }) {
  return (
    <div>
      <h1>About</h1>
      <button
        type="button"
        onClick={() => {
          console.log('Lets navigate');

          navigate('us');
        }}
      >
        Go to /us
      </button>

      {/* Embedded Routers */}
      <Router>
        <Something path="us" />
      </Router>
    </div>
  );
}

export default About;
