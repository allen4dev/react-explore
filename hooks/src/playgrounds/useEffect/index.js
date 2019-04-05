import React, { useState, useEffect } from 'react';

import axios from 'axios';

function useFetcher(url) {
  const [servants, setServants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchServants() {
      setLoading(true);

      try {
        const { data } = await axios.get(url);

        setServants(data);
      } catch (e) {
        console.log(e);
        setError(true);
      }

      setLoading(false);
    }

    fetchServants();
  }, [url]);

  return { servants, loading, error };
}

function Fetch() {
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState('http://localhost:3000/servants?name_like=');

  const { servants, loading, error } = useFetcher(url);

  const handleSearchChange = ({ target: { value } }) => setQuery(value);

  const handleSubmit = e => {
    e.preventDefault();

    setUrl(`http://localhost:3000/servants?name_like=${query}`);

    setQuery('');
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search servant"
          value={query}
          onChange={handleSearchChange}
        />

        <button type="submit">Search</button>
      </form>

      {error && (
        <div>
          <h1>Boom!!!</h1>
        </div>
      )}

      {loading ? (
        <div>Loading...</div>
      ) : (
        <section className="servants">
          {servants.map(servant => (
            <div key={servant.id}>{servant.name}</div>
          ))}
        </section>
      )}
    </section>
  );
}

export default Fetch;
