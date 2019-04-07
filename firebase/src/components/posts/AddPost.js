import React, { useState } from 'react';

import { firestore } from 'utils/firebase';

function AddPost() {
  const [text, setText] = useState('');

  const handleChange = ({ target: { value } }) => setText(value);

  const handleSubmit = async e => {
    e.preventDefault();

    await firestore.collection('posts').add({ text });

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
