import React, { useState } from 'react';

function AddPost({ createPost }) {
  const [text, setText] = useState('');

  const handleChange = ({ target: { value } }) => setText(value);

  const handleSubmit = e => {
    e.preventDefault();

    createPost({ text });

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">
        New post:
        <input name="text" type="text" value={text} onChange={handleChange} />
      </label>

      <button type="submit">Create post</button>
    </form>
  );
}

export default AddPost;
