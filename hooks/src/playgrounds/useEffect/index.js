import React, { useState, useEffect } from 'react';

import axios from 'axios';

function Fetch() {
  const [servants, setServants] = useState([]);

  useEffect(() => {
    async function fetchServants() {
      const { data } = await axios.get('http://localhost:3000/servants');

      setServants(data);
    }

    fetchServants();
  }, []);

  return (
    <section>
      {servants.map(servant => (
        <div key={servant.id}>{servant.name}</div>
      ))}
    </section>
  );
}

export default Fetch;
