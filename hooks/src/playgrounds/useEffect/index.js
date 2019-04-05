import React, { useState, useEffect } from 'react';

import axios from 'axios';

function Fetch() {
  const [servants, setServants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');

  const handleSearchChange = ({ target: { value } }) => setQuery(value);
  const handleSubmit = e => {
    e.preventDefault();

    setSearch(query);

    setQuery('');
  };

  useEffect(() => {
    async function fetchServants() {
      setLoading(true);

      const { data } = await axios.get(
        `http://localhost:3000/servants?name_like=${search}`,
      );

      setServants(data);

      setLoading(false);
    }

    fetchServants();
  }, [search]);

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
