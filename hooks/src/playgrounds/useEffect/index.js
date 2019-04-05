import React, { useState, useEffect } from 'react';

import axios from 'axios';

function Fetch() {
  const [servants, setServants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchServants() {
      setLoading(true);

      const { data } = await axios.get('http://localhost:3000/servants');

      setServants(data);

      setLoading(false);
    }

    fetchServants();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <section>
      {servants.map(servant => (
        <div key={servant.id}>{servant.name}</div>
      ))}
    </section>
  );
}

export default Fetch;
