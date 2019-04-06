import React, { useState, useEffect, useReducer } from 'react';

import axios from 'axios';

const initialState = {
  servants: [],
  loading: false,
  error: false,
  query: '',
};

function servantsReducer(state, action) {
  switch (action.type) {
    case 'SET_QUERY':
      return {
        ...state,
        query: action.payload.query,
      };

    case 'SET_SERVANTS':
      return {
        ...state,
        loading: false,
        servants: action.payload.data,
      };

    case 'REQUEST_RESOURCES':
      return {
        ...state,
        loading: true,
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
}

function useFgoApi(url) {
  const [state, dispatch] = useReducer(servantsReducer, initialState);

  useEffect(() => {
    async function fetchServants() {
      dispatch({ type: 'REQUEST_RESOURCES' });

      try {
        const { data } = await axios.get(url);

        dispatch({ type: 'SET_SERVANTS', payload: { data } });
      } catch (e) {
        console.log(e);
        dispatch({ type: 'SET_ERROR' });
      }
    }

    fetchServants();
  }, [url]);

  return { state, dispatch };
}

function Fetch() {
  const [url, setUrl] = useState('http://localhost:3000/servants?name_like=');

  const { state, dispatch } = useFgoApi(url);

  const handleSearchChange = ({ target: { value } }) =>
    dispatch({ type: 'SET_QUERY', payload: { query: value } });

  const handleSubmit = e => {
    e.preventDefault();

    setUrl(`http://localhost:3000/servants?name_like=${state.query}`);

    dispatch({ type: 'SET_QUERY', payload: { query: '' } });
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search servant"
          value={state.query}
          onChange={handleSearchChange}
        />

        <button type="submit">Search</button>
      </form>

      {state.error && (
        <div>
          <h1>Boom!!!</h1>
        </div>
      )}

      {state.loading ? (
        <div>Loading...</div>
      ) : (
        <section className="servants">
          {state.servants.map(servant => (
            <div key={servant.id}>{servant.name}</div>
          ))}
        </section>
      )}
    </section>
  );
}

export default Fetch;
